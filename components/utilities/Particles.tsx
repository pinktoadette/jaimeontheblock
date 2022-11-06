import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback, FC } from "react";
import { Container } from "react-dom";

const ParticlesCard: FC = () => {
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine);
      }, []);
  
    
      return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 250,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#fcd86a",
            },
            links: {
              color: "#c5a84f",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 500,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      );
}

export default ParticlesCard;