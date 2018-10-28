## Easily make and manage React animation loops
Dynamic looping of image animations in React. Define an animation with urls or paths, specify a duration, and the animation will repeat for that infinite iterations. You can not change the number of iterations programmatically.

## Demo
https://infinite.protobulb.io

## Usage

    import  React, { Component } from  "react";    
    import  InfiniteLoop  from  'infinite-loop-animation';    
    
    class  App  extends  Component {
    render() {
      return (    
        <div>    
          <InfiniteLoop  data={urls}  background={bg}  duration={1200}  size={65}  />
        </div>
        );    
      }    
    }
    
    const  urls  = [    
    "https://image.flaticon.com/icons/svg/413/413850.svg",    
    "https://image.flaticon.com/icons/svg/413/413826.svg",    
    "https://image.flaticon.com/icons/svg/413/413808.svg",
    ];
       
    const  bg  = ["http://samherbert.net/svg-loaders/svg-loaders/puff.svg"];
   
    export  default  App;


# Properties

#### data
An array of images
#### background
Background image path or url
#### duration
Time between each frame in milliseconds
#### size
Recommended values between 25 and 250

## License

MIT
