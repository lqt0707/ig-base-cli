#!/usr/bin/env node
export interface ICommand {
    description: string;
    command: string;
    action: (value?: any) => void;
}
