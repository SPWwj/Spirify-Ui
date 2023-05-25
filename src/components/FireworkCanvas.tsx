import React, { useEffect, useRef } from "react";

class Particle {
	x: number;
	y: number;
	dirx: number;
	diry: number;
	color: number[];
	size = 2;
	gravity = 0.01;
	opacity = 1;

	constructor(
		x: number,
		y: number,
		dirx: number,
		diry: number,
		color: number[]
	) {
		this.x = x;
		this.y = y;
		this.dirx = dirx;
		this.diry = diry;
		this.color = color;
	}

	draw(ctx: CanvasRenderingContext2D) {
		ctx.beginPath();
		ctx.fillStyle = `rgba(${this.color[0]},${this.color[1]},${this.color[2]},${this.opacity})`;
		ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
		ctx.fill();
	}

	update(ctx: CanvasRenderingContext2D) {
		this.diry += this.gravity;
		this.x += this.dirx;
		this.y += this.diry;
		this.opacity -= 0.01;
		this.draw(ctx);
	}
}

const FireworkCanvas: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");
		if (!ctx) return;
		const particles: Particle[] = []; // Move the initialization here

		const updateCanvasSize = () => {
			if (canvas) {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}
		};
		window.addEventListener("resize", updateCanvasSize);

		const animate = () => {
			if (ctx && canvas) {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				particles.forEach((particle, i) => {
					particle.update(ctx);
					if (particle.opacity <= 0) particles.splice(i, 1);
				});
				requestAnimationFrame(animate);
			}
		};

		canvas?.addEventListener("click", (e) => {
			let rect = canvas.getBoundingClientRect();
			let x = e.clientX - rect.left;
			let y = e.clientY - rect.top;
			let num = 300;
			let hd = (Math.PI * 2) / num;
			for (let i = 0; i < num; i++) {
				let color = [
					Math.floor(Math.random() * 256),
					Math.floor(Math.random() * 256),
					Math.floor(Math.random() * 256),
				];
				particles.push(
					new Particle(
						x,
						y,
						Math.cos(hd * i) * Math.random() * 2,
						Math.sin(hd * i) * Math.random() * 2,
						color
					)
				);
			}
		});

		updateCanvasSize();
		animate();
		// Cleanup on unmount
		return () => window.removeEventListener("resize", updateCanvasSize);
	}, []);

	return <canvas ref={canvasRef} style={{ backgroundColor: "#000" }} />;
};

export default FireworkCanvas;
