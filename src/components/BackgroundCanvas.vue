<template>
    <canvas ref="canvas">
        
    </canvas>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import { randBetween } from '@/Lib';

interface Point {
    x: number; 
    y: number;
}

@Options({})
export default class BackgroundCanvas extends Vue {
    canvas: any
    ctx: any
    /* width: number; */
    /* height: number; */
    points: Point[] = [];
    mounted() {
        window.addEventListener('resize', this.onResize);
        this.canvas = this.$refs['canvas'];
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.imageSmoothingEnabled = false;

        const start = {
            x: this.canvas.width / 2,
            y: this.canvas.height / 2 + this.canvas.height / 3
        };
        this.points.push(start);
        for (let i = 0; i < 5; i++) {
            const mag = randBetween(20, 40);
            //const ang = Math.random() * Math.PI / 4 + Math.PI / 4
            const ang = randBetween(3 * Math.PI / 8, 5 * Math.PI / 8);

            this.points.push({
                x: this.points[this.points.length - 1].x - mag * Math.cos(ang),
                y: this.points[this.points.length - 1].y - mag * Math.sin(ang)
            });
        }
        this.ctx.strokeStyle = '#614124';
        this.ctx.beginPath();
        this.ctx.moveTo(start.x, start.y);
        for (const point of this.points) {
            this.ctx.lineTo(point.x, point.y);
        }
        this.ctx.stroke();

        /* setInterval(this.loop, 500); */
    }
    randColor(): string {
        const digits = '0123456789ABCDEF';
        let res = "#";
        for (let i = 0; i < 6; i++)
            res += digits[Math.floor(Math.random() * 16)];
        return res;
    }
    loop() {
        const start = {
            x: this.canvas.width / 2,
            y: this.canvas.height / 2 + this.canvas.height / 3
        };
        const [green, brown] = ['#4E944F', '#614124']
        this.ctx.clearRect(0, 0, 500, 500);
        /* this.ctx.fillStyle = brown; */
        /* this.ctx.fillRect(-25 + start.x, -25 + start.y, 50, 50); */
        /* this.ctx.fillStyle = green; */
        /* this.ctx.fillRect(-25 + start.x, -25 + start.y - 50, 50, 50); */
    }
    onResize(e: Event) {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.loop();
    }
}
</script>

<style scoped>
canvas {
    display: block;
    position: absolute;
    top: 0;
    /* width: 100%; */
    /* height: 100%; */
    overflow: hidden;
    z-index: -1;
}
</style>
