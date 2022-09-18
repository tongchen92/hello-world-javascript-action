const core = require('@actions/core');
const github = require('@actions/github');
const { google } = require('googleapis');

async function fetch_performer_data() {
    const sheets = google.sheets({version: 'v4'});
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: core.getInput('PERFORMER_DATA_GOOGLE_SHEET_ID'),
      range: 'Performer Data!A:E',
      key: core.getInput('GOOGLESHEET_API_KEY')
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