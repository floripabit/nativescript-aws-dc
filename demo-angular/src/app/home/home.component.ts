import { AwsDcDynamodb } from 'nativescript-aws-dc/dynamodb';
import { AwsDcCognito, Region } from 'nativescript-aws-dc/cognito';
import { Component, OnInit } from "@angular/core";
import { Subject } from 'rxjs';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        let aws: AwsDcDynamodb = new AwsDcDynamodb();
        let cognito: AwsDcCognito = new AwsDcCognito("us-east-1_Jon0XYoi2", "26qveqnjr8nt8dhroi5per1nug", null, Region.US_EAST_1);
        let user:Subject<string> = new Subject();

        cognito.authenticate("v3rton@hotmail.com", "Bianka1616-").then( section => {
            //console.log(section.isValid);
            //console.log(section.isValidForThreshold);
            cognito.getUserDetails().then( details => {
                //console.log(details.attributes);
                //console.log(details.settings);
                //console.log(details.attributes.email);
                user.next(`Autenticação realizada: ${details}`);
            }).catch (e => {
                //console.log(e["message"]);
                user.next(`Erro na autenticação: ${e["message"]}`);
            });
        }).catch (e => {
            //console.log(e["message"]);
            user.next(`Erro na autenticação: ${e["message"]}`);
        });

        aws.initDb("AWSRegionUSEast1", "us-east-1:20f69c9f-9fcc-46e2-aac9-0856ffd6dc6e");
        /*aws.getItem("data",
        [
            {key:"serialNumber", value:{data:"50F14AD7F4B3", type:"S"}},
            {key:"timestamp", value:{data:"2019-12-20T19:34:21.000Z", type:"S"}}
        ]).subscribe((data) => {
            console.log("data:");
            console.log(data);
        }, (err) => {
            console.log("Error:");
            console.log(err);
        });*/
        /*aws.deleteItem("data",
        [
            {key:"serialNumber", value:{data:"50F14AD7F4B3111", type:"S"}},
            {key:"timestamp", value:{data:"2019-12-20T19:34:21.000Z", type:"S"}}
        ]).subscribe((data) => {
            console.log("data:");
            console.log(data);
        }, (err) => {
            console.log("Error:");
            console.log(err);
        });*/
        console.log("teste");
        aws.updateItem("data", "serialNumber", {value:{data:"50F14AD7F4B3111", type:"S"}})
        .subscribe((data) => {
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
