const express = require('express');
const morgan = require('morgan');

const app = express();

app.listen(3000, () => {
    console.debug('App listening on :3000');
});