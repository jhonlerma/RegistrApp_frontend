import { political_party } from "./political_party"

export interface Candidate {
    _id: string,
    document: string,
    last_name: string,
    name: string,
    political_party: political_party,
    resolution: string
}
