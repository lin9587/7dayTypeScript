// abstract class Component<T1, T2> {

//     props: T1;
//     state: T2;

//     constructor(props: T1) {
//         this.props = props

//     }

//     // render(): string {
//     //     return ''
//     // }

//     abstract render(): string;

// }

// interface IMyComponentProps {
//     val: number;
// }

// interface IMyComponentState {
//     x: number
// }

// class MyComponent extends Component<IMyComponentProps, IMyComponentState> {

//     constructor(props: IMyComponentProps) {
//         super(props);

//         this.state = {
//             x: 1
//         }
//     }

//     render() {
//         this.props.val;
//         this.state.x;
//         return '<myComponent />'
//     }
// }

// let myComponent = new MyComponent({val: 1})
// myComponent.render();
