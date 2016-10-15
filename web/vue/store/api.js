"use strict";

import 'whatwg-fetch';

export default {

    base_url: 'http://127.0.0.1/api',

    loadPost(id) {

        let url = this.base_url + "/post/" + id;

        return fetch(url).then(res => res.json())
            .then(data => data)
            .catch(e => console.log("uh error", e))

    },
    loadPostList({ category, tag, page }) {

        var page = page || 1;

        let url = this.base_url + "/index/page/" + page;

        if (category) {
            url = this.base_url + "/category/" + category + "/page/" + page;
        } else if (tag) {
            url = encodeURI(this.base_url + "/tag/" + tag + "/page/" + page);
        }

        return fetch(url).then(function(res) {
                return res.json();
            }).then(data => data)
            .catch(e => console.log("uh error", e))
    },

    loadInitData() {

        let url = this.base_url + "/init";

        return fetch(url).then(res => res.json())
            .then(data => data)
            .catch(e => console.log("uh error", e))

    },

    loadGuestbookList({ page }) {

        var page = page || 1;

        let url = this.base_url + "/guestbook/page/" + page;

        return fetch(url).then(res => res.json())
            .then(data => data)
            .catch(e => console.log("uh error", e))

    },

    loadSearchList({ key, page }) {

        var page = page || 1;

        var key = key || '';

        let url = this.base_url + "/post/search?" + 'key=' + key + '&page=' + page;

        return fetch(url).then(res => res.json())
            .then(data => data)
            .catch(e => console.log("uh error", e))

    },

    loadAbout() {
        let url = this.base_url + "/about";
        return fetch(url).then(res => res.json())
            .then(data => data)
            .catch(e => console.log("uh error", e))
    }
}