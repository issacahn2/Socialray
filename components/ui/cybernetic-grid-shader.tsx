"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CyberneticGridShader = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // 1) Renderer, Scene, Camera, Clock
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const clock = new THREE.Clock();

        // 2) GLSL Shaders
        const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

        const fragmentShader = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233)))
                     * 43758.5453123);
      }

      void main() {
        // normalize coords around center
        vec2 uv    = (gl_FragCoord.xy - 0.5 * iResolution.xy)
                     / iResolution.y;
        vec2 mouse = (iMouse - 0.5 * iResolution.xy)
                     / iResolution.y;

        float t         = iTime * 0.2;
        float mouseDist = length(uv - mouse);

        // warp effect around mouse
        float warp = sin(mouseDist * 20.0 - t * 4.0) * 0.1;
        warp *= smoothstep(0.4, 0.0, mouseDist);
        uv += warp;

        // grid lines - slightly thicker for visibility
        vec2 gridUv = abs(fract(uv * 10.0) - 0.5);
        float line  = pow(1.0 - min(gridUv.x, gridUv.y), 30.0);

        // base grid color pulsing (Gold: #D4AF37 -> 0.83, 0.68, 0.21)
        vec3 gridColor = vec3(0.83, 0.68, 0.21);
        vec3 color     = gridColor
                       * line
                       * (0.5 + sin(t * 2.0) * 0.2);

        // energetic pulses along grid (Light Gold: #F2D47E -> 0.95, 0.83, 0.49)
        float energy = sin(uv.x * 20.0 + t * 5.0)
                     * sin(uv.y * 20.0 + t * 3.0);
        energy = smoothstep(0.8, 1.0, energy);
        color += vec3(0.95, 0.83, 0.49) * energy * line;

        // glow around mouse
        float glow = smoothstep(0.1, 0.0, mouseDist);
        color += vec3(1.0, 0.9, 0.6) * glow * 0.5;

        // subtle noise
        color += random(uv + t * 0.1) * 0.05;

        float alpha = clamp(max(max(color.r, color.g), color.b) * 2.0, 0.0, 1.0);
        gl_FragColor = vec4(color, alpha);
      }
    `;

        // 3) Uniforms, Material, Mesh
        const uniforms = {
            iTime: { value: 0 },
            iResolution: { value: new THREE.Vector2() },
            iMouse: {
                value: new THREE.Vector2(
                    window.innerWidth / 2,
                    window.innerHeight / 2
                )
            }
        };

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms,
            transparent: true
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // 4) Resize handler
        const onResize = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            renderer.setSize(width, height);
            uniforms.iResolution.value.set(width, height);
        };
        window.addEventListener('resize', onResize);
        onResize(); // set initial size

        // 5) Mouse handler
        const onMouseMove = (e: MouseEvent) => {
            uniforms.iMouse.value.set(
                e.clientX,
                container.clientHeight - e.clientY
            );
        };
        window.addEventListener('mousemove', onMouseMove);

        // 6) Animation loop
        const animate = () => {
            uniforms.iTime.value = clock.getElapsedTime();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        const animationId = requestAnimationFrame(animate);

        // 7) Cleanup on unmount
        return () => {
            window.removeEventListener('resize', onResize);
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationId);

            const canvas = renderer.domElement;
            if (canvas.parentNode) {
                canvas.parentNode.removeChild(canvas);
            }

            material.dispose();
            geometry.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="w-full h-full"
            style={{
                pointerEvents: 'none'
            }}
            aria-label="Cybernetic Grid animated background"
        />
    );
};

export default CyberneticGridShader;
