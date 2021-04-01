console.log("Hello Cereal");

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'key3CZWKwGJ23LuAr'}).base('app0e7F32drzROp2H');

base("Table 1").select({}).eachPage(gotPageOfTable1, gotAllTable1);
const Table1 = [];
function gotPageOfTable1(records, fetchNextPage) {
	console.log("gotPageOfTable1()");
	Table1.push(...records);
	fetchNextPage();
}
function gotAllTable1(err) {
	console.log("gotAllTable1()");

	if (err) {
		console.log("error loading Table1");
		console.error(err);
		return;
	}

	showTable1();
}
function showTable1() {
	console.log("showTable1()");

	const Table1Container = document.querySelector
	("#container");

	Cereals.forEach((cereal) => {
		console.log("\nTable data fields:")

		const CerealsCover_image = document.createElement("img");

		CerealsCover_image.src = Cereals.fields.cover_image[0].url;

		CerealsContainer.appendChild(CerealsCover_image);

		const CerealsTitle = document.createElement("h1")

		CerealsTitle.innerHTML = Cereals.fields.title;

		CerealsContainer.appendChild(CerealsTitle);

		const CerealDescription  = document.createElement("p");

		CerealsDescription.innerHTML = Cereals.fields.description;

		CerealsDescription.appendChild(CerealsDescription);

		const CerealsBrand  = document.createElement("p");

		CerealsBrand.innerHTML = Cereals.fields.brand;

		CerealsBrand.appendChild(CerealsBrand);

		const CerealsTags  = document.createElement("p");

		CerealsTags.innerHTML = Cereals.fields.tags;

		CerealsTags.appendChild(CerealsTags);
	});
}
// function consoleLogTable1() {
// 	console.log("consoleLogTable1()");
// 	Table1.forEach((Table1) => {
// 		console.log("Table1:", Table1);

//   // console.log("gotPageOfPeople()");
//   console.log("There are "+records.length+" items in records");
//    // people.push(...records);
//   // request more pages
//   fetchNextPage();
// }

//   showTable1();

// function showTable1() {
// 	console.log("showTable1()");

// 	const Table1Container = document.querySelector
// 	("#container");

// 	Table1.forEach((Table1) => {



// 		const cerealImg = document.createElement("img");

// 		cerealImg.scr = cereal.fields.imges[0].url;

// 		cerealContainer.appendChild(cerealImg);
// 	};
// }
// // base('Table 1').select({
//     // Selecting the first 3 records in Grid view:
//     maxRecords: 3,
//     view: "Grid view"
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.

//     records.forEach(function(record) {
//         console.log('Retrieved', record.get('Title'));
//     });

//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     fetchNextPage();

// }, function done(err) {
//     if (err) { console.error(err); return; }
// });
    