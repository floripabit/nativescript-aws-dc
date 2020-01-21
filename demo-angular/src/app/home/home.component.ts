import { AwsDc } from 'nativescript-aws-dc';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        let aws: AwsDc = new AwsDc();
        aws.initDb("AWSRegionUSEast1", "us-east-1:20f69c9f-9fcc-46e2-aac9-0856ffd6dc6e");
        aws.getItem("data",
        [
            {key:"serialNumber", value:{data:"50F14AD7F4B3", type:"S"}},
            {key:"timestamp", value:{data:"2019-12-20T19:34:21.000Z", type:"S"}}
        ]).subscribe((data) => {
            console.log("data:");
            console.log(data);
        }, (err) => {
            console.log("Error:");
            console.log(err);
        });
        aws.deleteItem("data",
        [
            {key:"serialNumber", value:{data:"50F14AD7F4B3111", type:"S"}},
            {key:"timestamp", value:{data:"2019-12-20T19:34:21.000Z", type:"S"}}
        ]).subscribe((data) => {
            console.log("data:");
            console.log(data);
        }, (err) => {
            console.log("Error:");
            console.log(err);
        });

        aws.updateItem("data", "serialNumber", {value:{data:"50F14AD7F4B3111", type:"S"}}).subscribe((data) => {
            console.log("data:");
            console.log(data);
        }, (err) => {
            console.log("Error:");
            console.log(err);
        });

        aws.putItem("data",
        [
            {key:"serialNumber", value:{data:"50F14AD7F4B3111", type:"S"}},
            {key:"timestamp", value:{data:"2019-12-20T19:34:21.000Z", type:"S"}}
        ]).subscribe((data) => {
            console.log("data:");
            console.log(data);
        }, (err) => {
            console.log("Error:");
            console.log(err);
        });
    }
}
