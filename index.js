const core = require('@actions/core');
const { google } = require('googleapis');

async function fetch_performer_data() {
    const sheets = google.sheets({version: 'v4'});
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: '1PeOLi7lzddON9tuoh4JCOOjDfIH8G2Op_siEnHQlwyk',
      range: 'Performer Data!A:E',
      key: "AIzaSyBjHiYjKaMdeY_IzvErXyq8xX7jRdvsoA8"
    });
    const rows = res.data.values;
    if (!rows || rows.length === 0) {
      console.log('No data found.');
      return;
    }
    result = []
    rows.slice(1).forEach((row) => {
        var performer = new Object();
        for (const [index, element] of row.entries()) {
            performer[rows[0][index]] = element
        }
        result.push(performer)
    });
    return result
  }

async function set_output(performer_data){
    try {
        core.setOutput("data", performer_data);
    } catch (error) {
        core.setFailed(error.message);
    }
}

fetch_performer_data().then(set_output)