varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

void main(){
    //transform = position, scale, rotation, translation
    //modelMatrix  = position,scale rotation of the object
    //viewMatrix   = camera position, rotation, scale
    //projectionMatrix = perspective, orthographic, frustum projects our object to the screen (aspect ratio, fov, near, far)
    //modelViewMatrix = viewMatrix * modelMatrix

    //MVP
    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    vec4 projectedPosition = projectionMatrix * modelViewPosition;
    gl_Position = projectedPosition;

    vPosition = position;
    vNormal = normal;
    vUv = uv;
}