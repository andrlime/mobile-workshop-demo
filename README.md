# Step 2: Adding some styling
You will have noticed that there are some CSS styles at the bottom of the file. If you've used CSS before you will notice that these are more restrictive than normal CSS, with some fields requiring certain types, such as numbers instead of strings.

If you wish to use your solution, go back to Step1 but continue reading these instructions. If you wish to use ours, simply continue on this branch.

## Task 1: Add colors to task descriptions
Change `addTask` to apply styles to tasks based on what words they contain. If a task contains the phrase (you can use whatever you want) "Computer Science", make the task one color (if you can't decide, use red). If a task contains the phrase "Economics", make the task a different color (green if you can't decide). If a task contains neither, make it black.

Note that you don't have to make new styles in the array at the bottom. You can apply styles in line, such as
```ts
<Text style={{color: "red"}}></Text>
```

## Task 2: Add a background color
Add a background color to your main view. Hint, use `backgroundColor`.

## Task 3: Make the background color dynamic
Suppose you want your background color to be red. But you don't want it to be red right away. You only want it to be fully red after you have 10 tasks. Your task is, linearly interpolate the color based on the number of tasks you have between white and your target color. So if you have 1/10 tasks, the color should be 10% of the way to red.

Hint: use RGB somehow. You can Google for syntax hints.