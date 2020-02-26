export default (req, res) => {
    res.status(200).json({
        quote: "You miss every shot you don't take",
        author: "Michael Scott quoting Wayne Gretzky"
    });
}