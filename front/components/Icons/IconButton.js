import { styled, Button } from '@nextui-org/react';

export const IconButton = styled(Button, {
    boxShadow: '$md', // shadows.md
    variants: {
        size: {
            mysize: {
                width: '1',
                height: '1', // space[12]
                borderRadius: '0',
                borderBottomRightRadius: '$sm',
                borderTopRightRadius: '$sm'
            }
        },
        color: {
        }
    }
});
