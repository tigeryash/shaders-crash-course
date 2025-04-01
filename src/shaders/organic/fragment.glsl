varying vec2 vUv;
uniform float uTime;
void main(){
    vec2 uv = vUv;
    uv.y += uTime*.06;
    gl_FragColor = vec4(vec3(step(.5,mod(uv.y * 10.0, 1.0))), 1.0);
}