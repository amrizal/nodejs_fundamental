var name = "Apple";
var description = "Fruit from the apple tree";

module.exports = function(){
	var functions = {
		setName: function(nameIn){
			this.name = nameIn;
		},
		setDescription: function(descriptionIn){
			this.description = descriptionIn;
		},
		getInfo: function(){
			return {
				name: name,
				description: description
			}
		}
	};
	
	return functions;
}