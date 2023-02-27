import { MathClassType } from "../constant/math";

export class Vec3 extends Array<number> {

    public readonly type: MathClassType;

    constructor(x = 0, y = 0, z = 0) {
        super(x, y, z);
        this.type = MathClassType.VEC3;
    }

    public get x() {
        return this[0];
    }

    public get y() {
        return this[1];
    }

    public get z() {
        return this[2];
    }

    public set x(val: number) {
        this[0] = val;
    }

    public set y(val: number) {
        this[1] = val;
    }

    public set z(val: number) {
        this[2] = val;
    }

    public set(x: number, y: number, z: number) {
        this[0] = x;
        this[1] = y;
        this[2] = z;
        return this;
    }

    public copy(v: Vec3) {
        this[0] = v[0];
        this[1] = v[1];
        this[2] = v[2];
        return this;
    }

    public add(v: Vec3) {
        this[0] += v[0];
        this[1] += v[1];
        this[2] += v[2];
        return this;
    }

    public sub(v: Vec3) {
        this[0] -= v[0];
        this[1] -= v[1];
        this[2] -= v[2];
        return this;
    }

    public multiply(v: Vec3) {
        this[0] *= v[0];
        this[1] *= v[1];
        this[2] *= v[2];
        return this;
    }

    public divide(v: Vec3) {
        this[0] /= (v[0] || 1);
        this[1] /= (v[1] || 1);
        this[2] /= (v[2] || 1);
        return this;
    }

    public inverse() {
        this[0] = 1 / (this[0] || 1);
        this[1] = 1 / (this[1] || 1);
        this[2] = 1/ (this[2] || 1);
        return this;
    }

    public len() {
        const [x, y, z] = this;
        return Math.sqrt(x * x + y * y + z * z);
    }

    public distance(v: Vec3) {
        const x = this[0] - v[0];
        const y = this[1] - v[1];
        const z = this[2] - v[2];
        return Math.sqrt(x * x + y * y + z * z);
    }

    public squaredLen() {
        const [x, y, z] = this;
        return x * x + y * y + z * z;
    }

    public squaredDistance(v: Vec3) {
        const x = this[0] - v[0];
        const y = this[1] - v[1];
        const z = this[2] - v[2];
        return x * x + y * y + z * z;
    }

    public negate() {
        this[0] *= -1;
        this[1] *= -1;
        this[2] *= -1;
        return this;
    }

    public cross(v: Vec3) {
        const [ax, ay, az] = this;
        const [bx, by, bz] = v;
        this[0] = ay * bz - az * by;
        this[1] = az * bx - ax * bz;
        this[2] = ax * by - ay * bx;
        return this;
    }

    public scale(size: number) {
        this[0] *= size;
        this[1] *= size;
        this[2] *= size;
        return this;
    }

    public normalize() {
        const [x, y, z] = this;
        let sqLen = x * x + y * y + z * z;
        if (sqLen > 0) {
            sqLen = 1 / Math.sqrt(sqLen);
        }
        this[0] *= sqLen;
        this[1] *= sqLen;
        this[2] *= sqLen;
        return this;
    }

    public dot(v: Vec3) {
        return this[0] * v[0] + this[1] * v[1] + this[2] * v[2];
    }

    public equals(v: Vec3) {
        return (
            this[0] === v[0] &&
            this[1] === v[1] &&
            this[2] === v[2]
        )
    }

    public applyMatrix3() {}

    public applyMatrix4() {}

    public scaleRotateMatrix4() {}

    public applyQuaternion() {}

    public angle(v: Vec3) {

    }

    public lerp(v: Vec3, t: number) {

    }

    public clone() {
        const [x, y, z] = this;
        return new Vec3(x, y, z);
    }

    public fromArray(array: number[], offset = 0) {
        this[0] = array[offset]
        this[1] = array[offset + 1]
        this[2] = array[offset + 2]
        return this;
    }

    public toArray(array: number[] = [], offset = 0) {
        array[offset] = this[0];
        array[offset + 1] = this[1];
        array[offset + 2] = this[2];
        return array;
    }

    transformDirection() {}
}