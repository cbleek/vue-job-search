<template>
    <section class="container">
        <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
        <h1>{{ url }}</h1>

        <b-field>
            <b-input placeholder="Search..."
                     v-model="q"
                     type="search"
                     icon="magnify"
                     @keyup.native.enter="search">
            </b-input>

            <p class="control">
                <button @click="search" class="button is-primary">Search</button>
            </p>
        </b-field>

        <h2>{{ result.total }} Jobs</h2>

        <b-table  :loading="loading"
                  paginated
                  striped
                  backend-pagination
                  :data="jobs"
                  :total="result.total"
                  :per-page="result.jobsPerPage"
                  @page-change="onPageChange"
                  :current-page-sync="currentPage"
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
                    <img style="width:80px" v-show="props.row.organizationLogo" :src="props.row.organizationLogo"/>
                    {{ props.row.organization }}
                </b-table-column>
                <b-table-column field="location" label="Location" sortable>
                    {{ props.row.location }}
                </b-table-column>
            </template>
        </b-table>
    </section>
</template>

<script>

import axios from 'axios';

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
            address: '',
            currentPage: 1,
            defaultSortOrder: 'asc',
            sortField: '',
            sortOrder: '',
            url: 'https://yawik.org/demo/de/jobboard',
        }
  },
  name: 'Main',
  props: ['remote', 'widget-title', 'count', 'org'],
  mounted: function() {
    this.load();
  },
  methods: {

        search: function(){
            this.load();
        },
        load: function(pageNum) {

            this.currentPage = pageNum;
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
            };
            if (this.count) query.count = this.count;
            if (this.currentPage) query.page = this.currentPage;
            if (this.org) query.o = this.org;
            if ('' !== this.q) query.q = this.q;

            // sort query
            if(''!== this.sortField) query.sort = this.sortField;
            if('' !== this.sortField && 'asc' !== this.sortOrder){
                query.sort = `-${this.sortField}`;
            }

            /* Found on https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object
             * Converts Object to query string
             * e.g. { param: 'value', other: 'test' } => 'param=value&other=test'
             */
            const queryStr = Object.keys(query).map(k => `${k}=${encodeURIComponent(query[k])}`).join('&');
            const that = this;

            this.loading = true;
            axios.get(this.remote + '?' + queryStr)
                .then(function(response) {
                    that.jobs = response.data.jobs;
                    that.result = response.data;
                })
                .catch(function(err) { that.error = true; that.errmsg = err})
                .then(function() { that.loading = false })
            ;
        },
        onSort: function(field, order){
            this.sortField = field;
            this.sortOrder = order;
            this.load();
        },
        onPageChange: function(page){
            this.load(page);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
