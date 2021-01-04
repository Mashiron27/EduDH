function theClasses() {
  get = function () {
    return axios.get('http://localhost:3000/classes');
  };

  remove = function (index) {
    return axios.delete('http://localhost:3000/classes/'+index);
  };

  return {
    get: get,
    remove: remove
  };
}
