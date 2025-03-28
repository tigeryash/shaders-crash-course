varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

uniform float uRadius;
uniform sampler2D uTexture;

void main(){
    //vec3(step(uRadius, length(uv))) because of the xy coordinate it'll make a circle. subtracting .5 from the uv will make the circle centered at 0,0 the step makes the circle solid
    //fract(vUv.x * 10.0) will make the uv repeat 10 times in the x direction, fract(vUv.y * 10.0) will make the uv repeat 10 times in the y direction. 
    //step(.5, mod(vUv.x * 10.0, 1.0)) will make the uv repeat 10 times in the x direction, and step(.5, mod(vUv.y * 10.0, 1.0)) will make the uv repeat 10 times in the y direction.
    //mix(.0, .5, vUv.x) depending on the value of the last parameter it will make the color of the fragment darker or lighter. since I'm using the vUv.x it will make the color of the fragment darker or lighter depending on the x coordinate of the uv.
    
    //  vec3 viewDirection = normalize(cameraPosition - vPosition);
    //  float fresnel = 1.0 - dot(viewDirection , vNormal);

    //drawing a line in the middle of the screen
    //using the vUv we know the x or y position gradually increases and we can use it for the brightness. at 1.0 the brightness is full and at 0.0 the brightness is 0.0
    // if we subtract the vUv value by .5 the vlaues become shifted
    //we then use the absolute function to copy the gradient to the dark side of the plane and now we have black line in the middle of the screen
    //we can invert the gradient to get brighter in the middle and darker on the sides by doing 1.0 - abs(vUv.x - .5)
    //lastly to make the sharp line we can use the step function to make it a solid line vec4(vec3(step( .999, 1.0 - abs(vUv.x - .5))), 1);

    //drawing a circle
    //step(uRadius, length(vUv - .5))
    // another way to draw a circle is to use the distance fucntion. distance(position, center) 
    // gl_FragColor = vec4(vec3( 1.0 - step( uRadius,distance(vUv, vec2(.5)))), 1);
    // Inigo Quilez's has a bunch of functions to draw different shapes instea dof circles

    //loading a texture
    //send in as a uniform: uniform sampler2D uTexture;
    const vec3 DESATURATE = vec3(.2126, .7152, .0722);
    vec3 color = texture2D(uTexture, vUv).xyz;

    float finalColor = dot(DESATURATE, color);

    gl_FragColor = vec4(vec3(finalColor), 1);
}