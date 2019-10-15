<template>
    <div id="yavue" class="container">
        <link rel="stylesheet" type="text/css" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"/>
        <section id="yavHeader" class="container">
            <slot name="header">
                <h3>Job Search</h3>
            </slot>
        </section>
        <section id="yavFilter" class="container">
            <h3>Filter Job</h3>
            <b-field>
                <b-input placeholder="Search..."
                         v-model="q"
                         type="search"
                         icon="magnify"
                         @keyup.native.enter="search">
                </b-input>
            </b-field>
            <vue-google-autocomplete
                    id="gLocation"
                    v-on:placechanged="filterLocation"
                    class="input"
                    placeholder="Filter by address"
                    :types="locationType"
            >
            </vue-google-autocomplete>
            <b-field label="Distance">
                <b-slider :min=0 :max=100 :step=5 ticks v-model="d">
                    <b-slider-tick :value="0" :key="0">0km</b-slider-tick>
                    <b-slider-tick :value="25" :key="25">25km</b-slider-tick>
                    <b-slider-tick :value="50" :key="50">50km</b-slider-tick>
                    <b-slider-tick :value="75" :key="75">75km</b-slider-tick>
                    <b-slider-tick :value="100" :key="100">100km</b-slider-tick>

                </b-slider>
            </b-field>
            <p class="control">
                <button @click="search" class="button is-primary">Search</button>
            </p>
        </section>
        <section id="yavJobList" class="container">
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
        <section id="yavFooter">
            <slot name="footer">
                <h3>Default Footer</h3>
            </slot>
        </section>
    </div>
</template>

<script>
    import axios from 'axios';
    import { YAVUE_GOOGLE_API_KEY } from "./Config";

    export default {
        components: {
            VueGoogleAutocomplete: () => {
                const API_KEY = YAVUE_GOOGLE_API_KEY;
                return new Promise((resolve) => {
                    let scriptElement = document.createElement('script');
                    scriptElement.onload = () => {
                        resolve(import('vue-google-autocomplete'));
                    };
                    scriptElement.id = 'gAutocompleteScript';
                    scriptElement.async = true;
                    scriptElement.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`);
                    if(!document.getElementById('gAutocompleteScript')){
                        document.head.appendChild(scriptElement);
                    }
                });
            }
        },
        data: function(){
            return {
                q: '',
                d: 10,
                currentPage: 1,
                loading: false,
                error: false,
                errmsg: '',
                location: '',
                organization: false,
                jobs: [],
                result: {
                    totalPages: 0,
                    total: 0,
                    jobsPerPage: 0
                },
                sortField: '',
                sortOrder: '',
                defaultSortOrder: 'asc'
            }
        },
        props: {
            googleApiKey: {
                type: String,
                default: null
            },
            apiEndpoint: {
                type: String,
                default: 'https://yawik.org/demo/de/jobboard'
            },
            locationEnabled: {
                type: Boolean,
                default: true
            },
            locationType: {
                type: String,
                default: 'address'
            },
            locationCountry: {
                type: String,
                default: null
            },
            count: {
                type: Number,
                default: 10
            }
        },
        mounted: function(){
            window.YAVUE_GOOGLE_KEY = this.googleApiKey;
            this.load();
        },
        methods: {
            createUrl(){
                let query = {
                    json: 1
                };

                if('' !== this.q) query.q = this.q;
                query.d = this.d;
                if(this.count) query.count = this.count;
                if(this.currentPage) query.page = this.currentPage;
                if(this.organization) query.o = this.organization;

                // sort query
                if(''!== this.sortField) query.sort = this.sortField;
                if('' !== this.sortField && 'asc' !== this.sortOrder){
                    query.sort = `-${this.sortField}`;
                }

                if('' !== this.location){
                    query.l = this.location;
                }

                const queryStr = Object.keys(query).map(k => `${k}=${encodeURIComponent(query[k])}`).join('&');

                return this.apiEndpoint + '?' + queryStr;
            },
            load(pageNum = 1){
                this.currentPage = pageNum;
                const url = this.createUrl(pageNum);
                const that = this;
                this.loading = true;
                axios.get(url)
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
            },
            search(){
                this.load(1);
            },
            filterLocation(addressData){
                this.location = JSON.stringify({
                    coordinates: {
                        type: 'Point',
                        coordinates: [addressData.longitude, addressData.latitude]
                    }
                });
            }
        }
    }
</script>