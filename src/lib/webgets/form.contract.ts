import { FormlyFieldConfig } from '@ngx-formly/core'

import { ActionsContract } from './actions.contract'
import { ContentContract } from './content.contract'

export interface FormContract extends ContentContract{
    fields: FormlyFieldConfig[];
    buttonName?: string;
    hasReset?: boolean;
    color?: string;
    resource?: Object;
    summary?: string;
    actions?: ActionsContract[];
}
