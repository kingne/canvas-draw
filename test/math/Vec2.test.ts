import { MathClassType } from "../../src/constant/math";
import { Vec2 } from "../../src/math/Vec2";

describe('create a default vec2', () => {
    const v = new Vec2();
    it('exetnds Array && vec2', () => {
        expect(v).toBeInstanceOf(Array);
        expect(v).toBeInstanceOf(Vec2);
    });

    it('has a correct type', () => {
        expect(v.type).toBe(MathClassType.VEC2);
    });

    it('has a defaultValue [0,0]', () => {
        expect(v.x).toBe(0);
        expect(v.y).toBe(0);
        expect(v.length).toBe(2);
        const [x, y] = v;
        expect(x).toBe(0);
        expect(y).toBe(0);
    })
})

describe('method return correct', () => {
    const v = new Vec2(1, 1);
    const v1 = new Vec2(2, 2);
    
    it('return self', () => {
        expect(v.set(1, 1)).toBe(v);
        expect(v.copy(v1)).toBe(v);
        expect(v.add(v1)).toBe(v);
        expect(v.sub(v1)).toBe(v);
        expect(v.multiply(v1)).toBe(v);
        expect(v.divide(v1)).toBe(v);
        expect(v.inverse()).toBe(v);
        expect(v.scale(2)).toBe(v);
    })

    it('set vec2 to [0,1], set vec2 to [1, 2]', () => {
        v.set(0, 1);
        v1.set(1, 2);
        expect(v.x).toBe(0);
        expect(v.y).toBe(1);
        expect(v1.x).toBe(1);
        expect(v1.y).toBe(2);
    })

    it('add vec2(0,1), vec2(1,2) to vec2(1,3)', () => {
        v.add(v1);
        expect(v.x).toBe(1);
        expect(v.y).toBe(3);
    })

    it('sub vec2(1,3),vec(1,2) to vec2(0,1)', () => {
        v.sub(v1);
        expect(v.x).toBe(0);
        expect(v.y).toBe(1);
    })

    it('multiply vec2(0,1), vec2(1,2) to vec2(0,2)', () => {
        v.multiply(v1);
        expect(v.x).toBe(0);
        expect(v.y).toBe(2);
    })

    it('divide vec2(0,2), vec2(1,2) to vec2(0,1)', () => {
        v.divide(v1);
        expect(v.x).toBe(0);
        expect(v.y).toBe(1);
    })

    it('inverse vec2(1,2) to vec2(1, 0.5)', () => {
        v1.inverse();
        expect(v1.x).toBe(1);
        expect(v1.y).toBeCloseTo(0.5);
    })

    it('vec2(0,1) len === 1', () => {
        expect(v.len()).toBe(1);
    })

    it('vec2(1, 0.5) negate vec2(-1, -0.5)', () => {
        v1.negate();
        expect(v1.x).toBe(-1);
        expect(v1.y).toBe(-0.5);
    })

    it('vec2(0, 0) distance vec2(3, 4) is 5', () => {
        v.set(0, 0);
        v1.set(3, 4);
        expect(v.distance(v1)).toBe(5);
    })

    it('vec2(3, 4) squaredLen is 25', () => {
        expect(v1.squaredLen()).toBe(25);
    })

    it('vec2(0, 0) squaredDistance to vec2(3, 4) is 25', () => {
        expect(v.squaredDistance(v1)).toBe(25);
    })

    it('corss vec2(1, 2), vec2(3, 4) to 10', () => {
        v.set(1, 2);
        v1.set(3, 4);
        expect(v.cross(v1)).toBe(-2);
    })

    it('scale vec2(2, 4) to 1/2 be vec2(1, 2)', () => {
        v.set(2, 4);
        v.scale(0.5);
        expect(v.x).toBe(1);
        expect(v.y).toBe(2);
    })

    it('normalize vec2(3, 4) to be vec2(0.6, 0.8)', () => {
        v.set(3, 4);
        v.normalize();
        expect(v.x).toBeCloseTo(0.6);
        expect(v.y).toBeCloseTo(0.8);
    })

    it('dot vec2(1, 2), vec2(3, 4) to be 11', () => {
        v.set(1, 2);
        v1.set(3, 4);
        expect(v.dot(v1)).toBe(11);
    })

    it('correct equals', () => {
        v.set(1, 2);
        v1.set(1, 2);
        expect(v.equals(v1)).toBeTruthy();
        v1.set(3, 4);
        expect(v.equals(v1)).toBeFalsy();
    })

    it('lerp vec2(1, 2), vec2(3, 4) in 0.5', () => {
        v.set(1, 2);
        v1.set(3, 4);
        v.lerp(v1, 0.5);
        expect(v.x).toBe(2);
        expect(v.y).toBe(3);
    })

    it('clone vec2(1,2) to a new vec2(1,2)', () => {
        v.set(1, 2);
        const v2 = v.clone();
        expect(v2).not.toBe(v);
        expect(v2).toBeInstanceOf(Vec2);
        expect(v2.x).toBe(1);
        expect(v2.y).toBe(2);
    })
})