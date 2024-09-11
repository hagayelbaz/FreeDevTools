import Fuse from 'fuse.js';

class SearchManager {
    constructor(data, options) {
        const _option = options || {
            keys: [
                { name: "tags", weight: 0.2 },
                { name: "shortDescription", weight: 0.65 },
                { name: "linkText", weight: 0.15 }
            ],
            includeScore: true,
            threshold: 0.3,
            ignoreCase: true,
            ignoreLocation: true,
        }
        this.fuse = new Fuse(data, _option);
    }

    search(query) {
        if (!query) {
            return this.fuse.list;
        }

        return this.fuse.search(query).map(result => result.item);
    }

    groupByCategory(data) {
        return data.reduce((groups, item) => {
            const category = item.category;
            if (!groups[category]) {
                groups[category] = [];
            }
            groups[category].push(item);
            return groups;
        }, {});
    }
}


export default SearchManager;
