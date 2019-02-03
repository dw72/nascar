import Vue from 'vue'
import Airtable from 'airtable'

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
)

Vue.prototype.$base = tableName => {
  return base(tableName)
}
