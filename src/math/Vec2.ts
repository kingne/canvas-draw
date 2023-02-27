import { MathClassType } from "../constant/math";

export class Vec2 extends Array<number> {

    public readonly type = MathClassType.VEC2;

    constructor(x = 0, y = 0) {
        super(x, y);
    }

    public get x() {
        return this[0];
    }

    public get y() {
        return this[1];
    }

    set x(val: number) {
        this[0] = val;
    }

    set y(val: number) {
        this[1] = val;
    }

    public set(x: number, y: number) {
        this[0] = x;
        this[1] = y;
        return this;
    }

    public copy(v: Vec2) {
        this[0] = v[0];
        this[1] = v[1];
        return this;
    }

    public add(v: Vec2) {
        this[0] += v[0];
        this[1] += v[1];
        return this;
    }

    public sub(v: Vec2) {
        this[0] -= v[0];
        this[1] -= v[1];
        return this;
    }

    public multiply(v: Vec2) {
        this[0] *= v[0];
        this[1] *= v[1];
        return this;
    }

    public divide(v: Vec2) {
        this[0] /= (v[0] || 1);
        this[1] /= (v[1] || 1);
        return this;
    }

    public inverse() {
        this[0] = 1 / (this[0] || 1);
        this[1] = 1 / (this[1] || 1);
        return this;
    }

    public len() {
        const [x, y] = this;
        return Math.sqrt(x * x + y * y);
    }

    public distance(v: Vec2) {
        const x = this[0] - v[0];
        const y = this[1] - v[1];
        return Math.sqrt(x * x + y * y);
    }

    public squaredLen() {
        const [x, y] = this;
        return x * x + y * y;
    }

    public squaredDistance(v: Vec2) {
        const x = this[0] - v[0];
        const y = this[1] - v[1];
        return x * x + y * y;
    }

    public negate() {
        this[0] *= -1;
        this[1] *= -1;
        return this;
    }

    public cross(v: Vec2) {
        return this[0] * v[1] - this[1] * v[0];
    }

    public scale(size: number) {
        this[0] *= size;
        this[1] *= size;
        return this;
    }

    public normalize() {
        const [x, y] = this;
        let sqLen = x * x + y * y;
        if (sqLen > 0) {
            sqLen = 1 / Math.sqrt(sqLen);
        }
        this[0] *= sqLen;
        this[1] *= sqLen;
        return this;
    }

    public dot(v: Vec2) {
        return this[0] * v[0] + this[1] * v[1];
    }

    public equals(v: Vec2) {
        return this[0] === v[0] && this[1] === v[1];
    }

    public applyMatrix3() {

    }

    public applyMatrix4() {

    }

    public lerp(v: Vec2, t: number) {
        const [ax, ay] = this;
        const [bx, by] = v;
        this[0] += t * (bx - ax);
        this[1] += t * (by - ay);
        return this;
    }

    public clone() {
        const [x, y] = this;
        return new Vec2(x, y);
    }

    public fromArray(array: number[], offset = 0) {
        this[0] = array[offset];
        this[1] = array[offset + 1];
        return this;
    }

    public toArray(array: number[] = [], offset = 0) {
        array[offset] = this[0];
        array[offset + 1] = this[1];
        return array;
    }
}