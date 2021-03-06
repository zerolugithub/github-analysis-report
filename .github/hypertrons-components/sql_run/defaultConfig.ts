// Copyright 2019 - present Xlab
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Config from './config';

const defaultConfig: Config = {
  sqlRequestUrl: 'http://localhost:7001/query',
  command: '/sql-run',
  sqlFileRegex: 'sqls/([%w|-]+)/sql',
  manifestFileRegex: 'sqls/([%w|-]+)/manifest%.json',
  preProcessFileRegex: 'sqls/([%w|-]+)/pre%-processor%.js',
  postProcessFileRegex: 'sqls/([%w|-]+)/post%-processor%.js',
  defaultRenderParams: {
    year: 2020,
    table: 'github_log.year2020',
    baseUrl: 'http://gar2020.opensource-service.cn/',
    owner: 'X-lab2017',
    repo: 'github-analysis-report'
  },
  commentItemTemplate: `I found SQL component \`{{sqlName}}\` in this PR, the SQL run result data is:
\`\`\`
{{data}}
\`\`\`
The renderred text is:

{{text}}

Please check whether the result is as expected.

`,
  label: 'pull/sql-runned',
};

export default defaultConfig;
