import Fuse from 'fuse.js';

class SearchManager {
    fuseOptions = {
        keys: [
            { name: "tags", weight: 0.2 },
            { name: "shortDescription", weight: 0.65 },
            { name: "linkText", weight: 0.15 }
        ],
        includeScore: true,
        threshold: 0.3,
        ignoreLocation: true,
    };

    constructor(data, options = this.fuseOptions) {
        this.fuse = new Fuse(data, options);
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
