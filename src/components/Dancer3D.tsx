"use client";

import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

export default function Dancer3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xD99AA6, 1.2);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xE8B8C2, 0.5);
    fillLight.position.set(-5, 3, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.8);
    rimLight.position.set(0, 5, -5);
    scene.add(rimLight);

    const loader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(dracoLoader);
    let model: THREE.Group | null = null;
    const wrapper = new THREE.Group();
    scene.add(wrapper);

    loader.load(
      "/models/botine.glb",
      (gltf) => {
        model = gltf.scene;
        wrapper.add(model);

        // Center the model inside wrapper
        const box = new THREE.Box3().setFromObject(wrapper);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        model.position.x = -center.x / wrapper.scale.x;
        model.position.y = -center.y / wrapper.scale.y;
        model.position.z = -center.z / wrapper.scale.z;
        // Botine de balet — scalăm mai mic
        const targetHeight = isMobile ? 0.7 : 1.0;
        const scale = targetHeight / size.y;
        wrapper.scale.setScalar(scale);
        wrapper.position.y = -0.5;
        console.log("Dancer3D model loaded, size:", size, "scale:", scale);
      },
      (xhr) => {
        console.log("Dancer3D loading:", (xhr.loaded / xhr.total) * 100, "%");
      },
      (error) => {
        console.error("Error loading dancer glb:", error);
      }
    );

    let targetRotationY = 0;
    let currentRotationY = 0;
    let needsRender = true;

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      targetRotationY = max > 0 ? (window.scrollY / max) * Math.PI * 2 : 0;
      needsRender = true;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    let mouseX = 0, mouseY = 0, parX = 0, parY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
      needsRender = true;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let lastParX = 999, lastParY = 999, lastRotY = 999;
    let rafId: number | null = null;
    let isVisible = !document.hidden;

    const onVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && rafId === null) {
        needsRender = true;
        rafId = requestAnimationFrame(animate);
      } else if (!isVisible && rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const animate = () => {
      if (!isVisible) { rafId = null; return; }
      rafId = requestAnimationFrame(animate);

      parX += (mouseX - parX) * 0.05;
      parY += (mouseY - parY) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      // Only render if something actually changed
      const changed =
        Math.abs(parX - lastParX) > 0.001 ||
        Math.abs(parY - lastParY) > 0.001 ||
        Math.abs(currentRotationY - lastRotY) > 0.001;

      if (!changed && !needsRender) return;

      lastParX = parX;
      lastParY = parY;
      lastRotY = currentRotationY;
      needsRender = false;

      if (wrapper.children.length > 0) {
        wrapper.rotation.y = currentRotationY + parX * 0.3;
        wrapper.rotation.x = parY * 0.1;
      }

      camera.position.x = parX * 0.5;
      camera.position.y = -parY * 0.3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isMobile]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
}
