<template>
  <main class="hello">
    <h1>{{ url }}</h1>
    Main Content
    <b-button @click="clickMe" type="is-danger">Click-Me</b-button>
                <b-button type="is-danger">Danger</b-button>

    <b-table  :loading="loading" 
              paginated
              
              :data="jobs"
              :total="total"
              :per-page="jobsPerPage"
              aria-next-label="Next page"
              aria-previous-label="Previous page"
              aria-page-label="Page"
              aria-current-label="Current page"
              backend-sorting
              :default-sort-direction="defaultSortOrder"
              :default-sort="[sortField, sortOrder]"
              @sort="onSort">
      <template slot-scope="props">
                <b-table-column field="title" label="Title" sortable>
                    <a :href="props.row.link">{{ props.row.title }}</a>
                </b-table-column>
                <b-table-column field="organization" label="Organization" sortable>
                    {{ props.row.organization }}
                </b-table-column>
      </template>
    </b-table>
    <table class="yawik-job-list-items">
                <tbody>
                    <tr v-for="job in result.jobs" :key="job.id">
                        <td>
                            <a :href="job.link">{{ job.title }}</a>
                        </td>
                        <td width="20%">
                            <img v-if="job.organizationLogo" :src="job.organizationLogo" :alt="job.organization"/>
                            <span v-else>{{ job.organization }}</span>
                        </td>
                        <td width="15%" v-if="job.locations.length">
                            <div v-for="loc in job.locations" :key="loc.city">
                                {{ loc.city ? loc.city : loc.region }}<br>
                            </div>
                        </td>
                        <td width="15%" v-else>
                            {{ job.location }}
                        </td>
                    </tr>
                </tbody>
            </table>
  </main>
</template>

<script>

import axios from 'axios'


export default {
  data: function() {
        return {
            loading: true,
            error: false,
            fullTextEnabled: true,
            q: '',
            errmsg: '',
            jobs: [],
            result: {
                totalPages: 0,
                total: 0,
                jobsPerPage: 0
            },
            curpage: 1,
            url: 'https://yawik.org/demo/de/jobboard',
        }
  },
  name: 'Main',
  props: ['remote', 'widget-title', 'count', 'org'],
  mounted: function() {
    this.load()
  },
  methods: {
        search: function(){
            this.load();
        },
        load: function(pageNum) {

            this.curpage = pageNum;
            this.loading = true;
            this.error = false;

            if (!this.remote) {
                this.error = true;
                this.errmsg = 'No yawik url provided. Please use the attribute "url".';
                this.loading = false;
                return;
            }
          

            var query = {
                json: '1'
            }
            if (this.count) query.count = this.count
            if (this.curpage) query.page = this.curpage
            if (this.org) query.o = this.org
            if ('' !== this.q) query.q = this.q

            /* Found on https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
             * Converts Object to query string
             * e.g. { param: 'value', other: 'test' } => 'param=value&other=test'
             */
            var queryStr = Object.keys(query).map(k => `${k}=${encodeURIComponent(query[k])}`).join('&');
            var that = this

            axios.get(this.remote + '?' + queryStr)
            .then(function(response) {
                that.jobs = response.data.jobs
                that.result = response.data;
            })
            .catch(function(err) { that.error = true; that.errmsg = err})
            .then(function() { that.loading = false })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  background {
    color: yellow;
  }
}
</style>
