import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function MySelect({ items, handleSelectChange, onChange, ...rest }) {
    const theme = useTheme();


    return (
        <Select
            onChange={handleSelectChange}
            fullWidth
            {...rest}
            input={<OutlinedInput style={{ maxWidth: 200, width: '100%' }} />}
            MenuProps={MenuProps}
        >
            {items.map((name) => (
                <MenuItem
                    onChange={onChange(name)}
                    key={name}
                    value={name}
                    // style={getStyles(name, rest.value, theme)}
                >
                    {name}
                </MenuItem>
            ))}
        </Select>
    );
}
