import {Label, Input} from './Filter.styled'

const Filter = ({ value, filter }) => (
    <Label > <span>Find contacts by name</span> 
        <Input type="text" value={value} onChange={filter} />
    </Label>
);

export default Filter;