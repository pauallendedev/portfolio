"use client";

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

const VERT = /* glsl */ `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const FRAG = /* glsl */ `
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uMouse;

// Simplex 2D noise — Ashima
vec3 permute(vec3 x){return mod(((x*34.0)+1.0)*x,289.0);}
float snoise(vec2 v){
  const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
  vec2 i=floor(v+dot(v,C.yy));
  vec2 x0=v-i+dot(i,C.xx);
  vec2 i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
  vec4 x12=x0.xyxy+C.xxzz;
  x12.xy-=i1;
  i=mod(i,289.0);
  vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
  vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
  m=m*m; m=m*m;
  vec3 x=2.0*fract(p*C.www)-1.0;
  vec3 h=abs(x)-0.5;
  vec3 ox=floor(x+0.5);
  vec3 a0=x-ox;
  m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
  vec3 g;
  g.x=a0.x*x0.x+h.x*x0.y;
  g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.0*dot(m,g);
}

float fbm(vec2 p){
  float v=0.0;
  float a=0.5;
  for(int i=0;i<5;i++){
    v+=a*snoise(p);
    p*=2.02;
    a*=0.5;
  }
  return v;
}

void main(){
  vec2 uv=vUv;
  vec2 p=(gl_FragCoord.xy/uRes.xy)*2.0-1.0;
  p.x*=uRes.x/uRes.y;

  float t=uTime*0.05;
  vec2 q=vec2(fbm(p*0.6+t),fbm(p*0.6-t+vec2(3.7,1.3)));
  float n=fbm(p*0.9+q*1.4+t);
  n=smoothstep(-0.3,1.1,n);

  // base near-black
  vec3 bgA=vec3(0.035,0.035,0.04);
  vec3 bgB=vec3(0.06,0.065,0.08);
  vec3 col=mix(bgA,bgB,n);

  // accent kiss (lime)
  vec3 accent=vec3(0.78,1.0,0.0);
  float halo=smoothstep(0.55,0.95,n);
  col+=accent*halo*0.04;

  // mouse spotlight
  vec2 m=(uMouse/uRes.xy)*2.0-1.0;
  m.x*=uRes.x/uRes.y;
  float d=distance(p,m);
  col+=accent*0.05*smoothstep(0.6,0.0,d);

  // vignette
  float vig=smoothstep(1.4,0.4,length(p));
  col*=vig*1.05;

  // dither
  float dither=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);
  col+=(dither-0.5)*0.012;

  gl_FragColor=vec4(col,1.0);
}`;

export function WebGLBackground() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const container = wrapRef.current;
    if (!container) return;

    if (reduceMotion) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const renderer = new Renderer({ alpha: true, dpr });
    const gl = renderer.gl;
    gl.clearColor(0.039, 0.039, 0.043, 1);

    container.appendChild(gl.canvas);
    gl.canvas.style.position = "absolute";
    gl.canvas.style.inset = "0";
    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uRes: { value: [container.offsetWidth, container.offsetHeight] },
        uMouse: { value: [container.offsetWidth / 2, container.offsetHeight / 2] },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      renderer.setSize(w, h);
      program.uniforms.uRes.value = [w, h];
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      program.uniforms.uMouse.value = [e.clientX, container.offsetHeight - e.clientY];
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    let running = true;
    const start = performance.now();
    const tick = () => {
      if (!running) return;
      program.uniforms.uTime.value = (performance.now() - start) / 1000;
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      if (gl.canvas.parentNode) gl.canvas.parentNode.removeChild(gl.canvas);
      const lose = gl.getExtension("WEBGL_lose_context");
      lose?.loseContext();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{ background: "var(--color-bg)" }}
    />
  );
}
