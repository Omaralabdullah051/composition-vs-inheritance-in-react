////////////Composition VS Inheritance///////////////

//React always recommand to use composition instead of inheritance.


//Why React recommand to use composition instead of inheritance?
//when we use inheritance in react for sharing same methods and properties of a component(here state is a property of class component and handleEvent is a method of class component);here are some issues :

//1.components will be tightly coupled.
//2.from child, it's not clear what parent does.
//3.not clear about parent child relation.
//4.future components will also be tightly coupled.
//5.nested extend in child that already extend other parent.

//so we can easily use composition and that made our components independent.components will be loosely coupled. We need to use inheitance just one time;when we use class component and need to extends React.Component .

//React gives us many pattern to use composition to share the states and functionality from parent to child components.Lifting state up,render props pattern,higher order component,context API.

//In this project, we used render props pattern to use composition to share same states and functionality from one component to another component. In large application, we can use Context API to use composition very easily.
