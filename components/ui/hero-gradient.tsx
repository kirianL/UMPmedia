"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

interface HeroGradientProps {
  active?: boolean;
}

export function HeroGradient({ active = true }: HeroGradientProps) {
  return (
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none overflow-hidden bg-[#0a0a0a]">
      <ShaderGradientCanvas
        pixelDensity={0.45}
        fov={45}
        lazyLoad={true}
        powerPreference="low-power"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <ShaderGradient
          animate={active ? "on" : "off"}
          brightness={1.2}
          cAzimuthAngle={180}
          cDistance={2.81}
          cPolarAngle={80}
          cameraZoom={9.1}
          color1="#32fb00"
          color2="#5fe738"
          color3="#1a4d10"
          envPreset="city"
          grain="on"
          lightType="3d"
          positionX={0}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.1}
          rotationX={50}
          rotationY={0}
          rotationZ={-60}
          shader="defaults"
          type="waterPlane"
          uAmplitude={0}
          uDensity={1.5}
          uFrequency={0}
          uSpeed={0.3}
          uStrength={1.5}
          uTime={8}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
