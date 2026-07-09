import { format } from "winston";

export const createLabel = (labelName: string)=>{
    format.label({label:labelName})
}