exports.routes = function (map) {
    map.all(':controller/:action');
    map.all(':controller/:action/:id');
    map.root('home#index');
};
