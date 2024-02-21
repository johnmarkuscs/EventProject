export async function showEvents(req, res) {
    console.log("Show events");
    res.send('Showing user events');
}

export async function createEvent(req, res) {
    console.log("Creating event");
    res.send('Creating event');
}

export async function createComment(req, res) {
    console.log("Creating comments");
    res.send('Comment added');
}

export async function createRating(req, res) {
    console.log("Creating rating");
    res.send('Creating rating');
}


export async function joinEvent(req, res) {
    console.log("Creating rating");
    res.send('Creating rating');
}
