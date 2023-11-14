# Step 1: Writing your first React Native code
Now that your development environment is set up, you will write your first code in React Native! In this mini project, we will make a simple todo list. The features will include adding new tasks, deleting tasks, editing tasks, and making an aesthetically pleasing design. In Step 1, we will focus on the functionality. In Step 2, we will focus on the design.

To help you not spend too much time thinking about this, we have provided some template code. We will guide you through filling in the blanks. Note that at first, the code might not compile. You will have to fill in some blanks first, and then your app will run.

## The `useState` hook
React Native (and React) work on a render cycle. Every time you change the state of your components (the "Virtual DOM" if you will), React will calculate what components need to be rerendered, and rerender just those parts of the component tree. This is for efficiency reasons. What happens if you need to keep a variable across renders? This is where the idea of `state` comes in.
```ts
const [state, setState] = useState(defaultValue);
```
is an example of a stateful variable. The value of this variable is originally set to `defaultValue`. It can be accessed via the `state` variable name. And, the `setState` function directly mutates this value. So, if I have a component
```ts
const SomeComponent = () => {
    const [st, setSt] = useState(0);
    return (
        <View>
            <Text>{st}</Text>
        </View>
    );
}
```
then every time this component changes the value of `st`, there is a rerender.

## Task 1: Create a working text input box.
Use the idea of `useState` to create a working text input box. To test this, create another component that mirrors the value in the input box. So, every time you type into the box, it appears both inside the box, and outside the box.

Hint: the text field will render the `value` property of the box. But, that property needs to be stateful to change every time you type something into the box. Of course, you can still type even if you don't have any `state`, but then you can't access this value.

As for where to start, focus on the `value` and `onChangeText` properties of the `TextInput` component in the template. Then, think about what state variables need to be made. An example has been made for you. You can use it if you wish, but you do not have to. Then, look at the `Text` field right below the `TextInput` component. How can you use this to test your code?

## Task 2: Adding and clearing tasks
For Task 2, focus on the two buttons in the View immediately after the `TextInput`. There are two buttons. Study what they do.

Your task is to make them work as described.

Hint: make more state variables as necessary using `useState`. You can use arrays, such as in `useState([])`. Then, look at the functions defined by `addTask` and `clearTasks`. Complete these functions.

## Task 3: Rendering tasks
To test Task 2, you need to render your tasks. To do this, we have provided you with an empty `map` function. This is the same `map` function as is used in `CS 111` and other functional programming classes and languages. It maps a function to a list. In React, a list of components is directly rendered as those components.

Note that if the way you implemented storing tasks is not using an array, you may have to change this function to work with your implementation.

## Task 4: Editing tasks
You now want to add more code so you can edit the tasks you've added. Here is a rough guide, as this is much more open ended:
1. Consider a state variable to store whether you are currently editing an existing task, or adding a new one.
2. Consider a variable that stores which index you are currently editing.
3. Consider writing more lambda (`const`) functions similar to `addTask` and `clearTasks`.
4. You will need to add more components. Based on what we have used, you can use `Button` to your advantage.
5. In JavaScript, you can mutate arrays in place. How can you make a temporary copy of your tasks and change it before putting it back?


