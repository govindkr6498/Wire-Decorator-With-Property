import { LightningElement,wire } from 'lwc';
import getAccountData from '@salesforce/apex/AccountHelper.getAccountData'
const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Industry', fieldName: 'Industry'},
    { label: 'Rating', fieldName: 'Rating'},
];
export default class WireDecoratorProperty extends LightningElement {
    columns = columns;
    @wire(getAccountData) accounts;
}
