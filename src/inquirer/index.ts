
import * as git from '@/inquirer/git';
import * as tpl from '@/inquirer/tpl';
import * as registerPlugin from '@/inquirer/registerPlugin';

export default {
  ...tpl,
  ...git,
  ...registerPlugin
}