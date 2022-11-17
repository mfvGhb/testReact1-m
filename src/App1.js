
let  App1 = (props) =>
   <h3 className={props.myClass}>App1: перeдано : {props.children}
                                                  {props.myClass}
                                                  {props.text}{props.val}
   </h3>

let  App2 = (props) =><h3 {...props}> App2: перeдано {props.className}</h3>
let  App3 = (props) =><div {...props}>перeдано: {props.children}</div>



export default App1 ;
export  {App2} ;
export  {App3} ;

