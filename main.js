console.log("Tensor flow")
// document.getElementById("output").innerText = [[93]].toString()
// Define a model for linear regression.
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

// Generate some synthetic data for training.
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Train the model using the data.
model.fit(xs, ys, { epochs: 500 }).then(() => {
    document.getElementById("predictButton").disabled = false;
    document.getElementById("predictButton").innerText = "Predict";
});
document.getElementById("predictButton").addEventListener("click", (element, event) => {
    // input box value
    let value = parseInt(document.getElementById("inputValue").value);
    document.getElementById("output").innerText = model.predict(tf.tensor2d([value], [1, 1])).toString();
    model.predict(tf.tensor2d([value], [1, 1])).print()

})




