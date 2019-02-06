# NG Contracts

## Introduction
Collection of common interfaces useful for everyday Angular application development.

## Install
```
$ npm i ng-contracts
```

## Usage
```
import { ContactContract } from 'isaiahiroko/ng-contracts'

...

let userContact: ContactContract

...

constructor(public payload: { userContact: ContactContract }) {}

...

```

## API
### Common Contracts
+ AppContract
+ BrandContract
+ ContractContract
+ DateTimeContract
+ EmailPayloadContract
+ ErrorContract
+ ImageContract
+ JSONContract
+ LinkContract
+ MetaContract
+ ModelBaseContract
+ PageContract
+ PersonContract
+ UserContract

### Store Contracts
+ ColumnContract
+ ConditionContract
+ FilterContract
+ HttpOptionsContract
+ QueryContract
+ ResponseContract
+ RuleContract
+ StorageContract
+ StoreContract
+ TokenContract

### Webegts Contracts
+ ActionsContract
+ CardContract
+ ContentContract
+ FilterFormContract
+ FormContract
+ FrameContract
+ SliderContract
+ TableContract
+ WebgetContract

### Transformers Contracts
+ XformToCardContract

### Types
+ ThemeType
+ StatusType
+ SizeType

```
export type ThemeType = string | 'primary' | 'secondary' | 'warning' | 'info' | 'success' | 'danger'
export type StatusType = string | 'prstine' | 'active' | 'inactive'
export type SizeType = string | 'sm' | 'md' | 'lg'
```

## [Licence](./LICENCE.md)