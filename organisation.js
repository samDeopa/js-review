const organisation = {
  name: "GlobalTech",
  divisions: [
    {
      divisionName: "Division 1",
      departments: [
        {
          departmentName: "HR",
          employees: [
            {
              id: 1,
              name: "Employee 1-1-1",
              age: 27,
              role: "Engineer",
              projects: [
                {
                  id: "P-1-1-1-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 117353,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-1-1-1-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 199842,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-1-1-1-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 204757,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: [
                "PMP",
                "AWS Certified Developer",
                "Certified Kubernetes Administrator",
              ],
              address: {
                city: "Toronto",
                country: "France",
              },
            },
            {
              id: 2,
              name: "Employee 1-1-2",
              age: 42,
              role: "Manager",
              projects: [
                {
                  id: "P-1-1-2-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 130804,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-1-1-2-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 221230,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: ["PMP"],
              address: {
                city: "Tokyo",
                country: "USA",
              },
            },
            {
              id: 3,
              name: "Employee 1-1-3",
              age: 34,
              role: "Engineer",
              projects: [
                {
                  id: "P-1-1-3-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 166269,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-1-1-3-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 171116,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-1-1-3-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 109491,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: ["Google Analytics Certified"],
              address: {
                city: "Seattle",
                country: "Japan",
              },
            },
            {
              id: 4,
              name: "Employee 1-1-4",
              age: 37,
              role: "Manager",
              projects: [
                {
                  id: "P-1-1-4-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 263473,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-1-1-4-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 278868,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-1-1-4-3",
                  name: "Project 3",
                  status: "In Progress",
                  budget: 109286,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-3-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-1-1-4-4",
                  name: "Project 4",
                  status: "In Progress",
                  budget: 157719,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: [
                "Certified Kubernetes Administrator",
                "Salesforce Certified",
                "Google Analytics Certified",
              ],
              address: {
                city: "Paris",
                country: "Australia",
              },
            },
            {
              id: 5,
              name: "Employee 1-1-5",
              age: 37,
              role: "Analyst",
              projects: [
                {
                  id: "P-1-1-5-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 298208,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "Salesforce Certified",
                "PMP",
                "Certified Kubernetes Administrator",
              ],
              address: {
                city: "Tokyo",
                country: "Canada",
              },
            },
            {
              id: 6,
              name: "Employee 1-1-6",
              age: 44,
              role: "Manager",
              projects: [
                {
                  id: "P-1-1-6-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 175142,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-1-1-6-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 156523,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-1-1-6-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 113848,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-1-1-6-4",
                  name: "Project 4",
                  status: "On Hold",
                  budget: 242899,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "Google Analytics Certified",
                "Certified Kubernetes Administrator",
                "PMP",
              ],
              address: {
                city: "Tokyo",
                country: "USA",
              },
            },
            {
              id: 7,
              name: "Employee 1-1-7",
              age: 28,
              role: "Specialist",
              projects: [
                {
                  id: "P-1-1-7-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 249068,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-1-1-7-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 263151,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-1-1-7-3",
                  name: "Project 3",
                  status: "On Hold",
                  budget: 125755,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-1-1-7-4",
                  name: "Project 4",
                  status: "Completed",
                  budget: 139104,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-4-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: ["AWS Certified Developer"],
              address: {
                city: "New York",
                country: "France",
              },
            },
            {
              id: 8,
              name: "Employee 1-1-8",
              age: 42,
              role: "Engineer",
              projects: [
                {
                  id: "P-1-1-8-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 289331,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-1-1-8-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 127473,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-1-1-8-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 195844,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-1-1-8-4",
                  name: "Project 4",
                  status: "In Progress",
                  budget: 288104,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: ["PMP", "Salesforce Certified"],
              address: {
                city: "Paris",
                country: "Germany",
              },
            },
            {
              id: 9,
              name: "Employee 1-1-9",
              age: 38,
              role: "Analyst",
              projects: [
                {
                  id: "P-1-1-9-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 182629,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-1-1-9-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 203931,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-1-1-9-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 196893,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-1-1-9-4",
                  name: "Project 4",
                  status: "On Hold",
                  budget: 295966,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: ["PMP"],
              address: {
                city: "Toronto",
                country: "Australia",
              },
            },
            {
              id: 10,
              name: "Employee 1-1-10",
              age: 44,
              role: "Analyst",
              projects: [
                {
                  id: "P-1-1-10-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 283453,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-1-1-10-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 108600,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: [
                "Google Analytics Certified",
                "Certified Kubernetes Administrator",
              ],
              address: {
                city: "San Francisco",
                country: "Germany",
              },
            },
            {
              id: 11,
              name: "Employee 1-1-11",
              age: 38,
              role: "Analyst",
              projects: [
                {
                  id: "P-1-1-11-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 197624,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-1-1-11-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 259603,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-1-1-11-3",
                  name: "Project 3",
                  status: "In Progress",
                  budget: 250098,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-1-1-11-4",
                  name: "Project 4",
                  status: "Completed",
                  budget: 271176,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-4-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: ["Google Analytics Certified"],
              address: {
                city: "New York",
                country: "France",
              },
            },
            {
              id: 12,
              name: "Employee 1-1-12",
              age: 38,
              role: "Engineer",
              projects: [
                {
                  id: "P-1-1-12-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 176569,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: ["PMP"],
              address: {
                city: "San Francisco",
                country: "Australia",
              },
            },
            {
              id: 13,
              name: "Employee 1-1-13",
              age: 33,
              role: "Analyst",
              projects: [
                {
                  id: "P-1-1-13-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 223265,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-1-1-13-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 143537,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-1-1-13-3",
                  name: "Project 3",
                  status: "In Progress",
                  budget: 191463,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: [
                "Salesforce Certified",
                "Certified Kubernetes Administrator",
              ],
              address: {
                city: "Toronto",
                country: "Germany",
              },
            },
            {
              id: 14,
              name: "Employee 1-1-14",
              age: 27,
              role: "Manager",
              projects: [
                {
                  id: "P-1-1-14-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 226444,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-1-1-14-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 237250,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-1-1-14-3",
                  name: "Project 3",
                  status: "In Progress",
                  budget: 270752,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-3-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: ["Certified Kubernetes Administrator"],
              address: {
                city: "Berlin",
                country: "USA",
              },
            },
            {
              id: 15,
              name: "Employee 1-1-15",
              age: 36,
              role: "Engineer",
              projects: [
                {
                  id: "P-1-1-15-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 157771,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-1-1-15-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 131547,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-1-1-15-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 260006,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-1-1-15-4",
                  name: "Project 4",
                  status: "In Progress",
                  budget: 295809,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "Google Analytics Certified",
                "AWS Certified Developer",
              ],
              address: {
                city: "Tokyo",
                country: "Australia",
              },
            },
          ],
        },
      ],
    },
    {
      divisionName: "Division 2",
      departments: [
        {
          departmentName: "Marketing",
          employees: [
            {
              id: 1,
              name: "Employee 2-1-1",
              age: 38,
              role: "Manager",
              projects: [
                {
                  id: "P-2-1-1-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 263750,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-1-1-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 216405,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-1-1-3",
                  name: "Project 3",
                  status: "On Hold",
                  budget: 138600,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: [
                "Google Analytics Certified",
                "AWS Certified Developer",
              ],
              address: {
                city: "Paris",
                country: "Japan",
              },
            },
            {
              id: 2,
              name: "Employee 2-1-2",
              age: 41,
              role: "Manager",
              projects: [
                {
                  id: "P-2-1-2-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 233192,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: [
                "Certified Kubernetes Administrator",
                "Google Analytics Certified",
              ],
              address: {
                city: "Seattle",
                country: "Japan",
              },
            },
            {
              id: 3,
              name: "Employee 2-1-3",
              age: 43,
              role: "Manager",
              projects: [
                {
                  id: "P-2-1-3-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 163876,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-1-3-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 148976,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-1-3-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 160012,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: ["Salesforce Certified"],
              address: {
                city: "Sydney",
                country: "Japan",
              },
            },
            {
              id: 4,
              name: "Employee 2-1-4",
              age: 44,
              role: "Engineer",
              projects: [
                {
                  id: "P-2-1-4-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 152019,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-1-4-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 244560,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-1-4-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 161527,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: [
                "Certified Kubernetes Administrator",
                "AWS Certified Developer",
              ],
              address: {
                city: "Seattle",
                country: "Japan",
              },
            },
            {
              id: 5,
              name: "Employee 2-1-5",
              age: 41,
              role: "Specialist",
              projects: [
                {
                  id: "P-2-1-5-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 281450,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-1-5-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 231915,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: ["Google Analytics Certified"],
              address: {
                city: "New York",
                country: "Australia",
              },
            },
            {
              id: 6,
              name: "Employee 2-1-6",
              age: 29,
              role: "Specialist",
              projects: [
                {
                  id: "P-2-1-6-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 275643,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-1-6-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 261009,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-1-6-3",
                  name: "Project 3",
                  status: "On Hold",
                  budget: 171409,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-1-6-4",
                  name: "Project 4",
                  status: "On Hold",
                  budget: 281796,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: ["AWS Certified Developer"],
              address: {
                city: "Sydney",
                country: "Canada",
              },
            },
            {
              id: 7,
              name: "Employee 2-1-7",
              age: 34,
              role: "Manager",
              projects: [
                {
                  id: "P-2-1-7-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 294063,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-1-7-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 255657,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-1-7-3",
                  name: "Project 3",
                  status: "On Hold",
                  budget: 180241,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-1-7-4",
                  name: "Project 4",
                  status: "Completed",
                  budget: 148427,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: [
                "AWS Certified Developer",
                "Salesforce Certified",
              ],
              address: {
                city: "Berlin",
                country: "France",
              },
            },
            {
              id: 8,
              name: "Employee 2-1-8",
              age: 41,
              role: "Analyst",
              projects: [
                {
                  id: "P-2-1-8-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 225962,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-1-8-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 126526,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: [
                "Google Analytics Certified",
                "Certified Kubernetes Administrator",
                "AWS Certified Developer",
              ],
              address: {
                city: "Tokyo",
                country: "USA",
              },
            },
            {
              id: 9,
              name: "Employee 2-1-9",
              age: 36,
              role: "Engineer",
              projects: [
                {
                  id: "P-2-1-9-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 129039,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-1-9-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 147254,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-1-9-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 151464,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-1-9-4",
                  name: "Project 4",
                  status: "In Progress",
                  budget: 263407,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: ["AWS Certified Developer"],
              address: {
                city: "Tokyo",
                country: "France",
              },
            },
            {
              id: 10,
              name: "Employee 2-1-10",
              age: 40,
              role: "Analyst",
              projects: [
                {
                  id: "P-2-1-10-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 280720,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: ["AWS Certified Developer"],
              address: {
                city: "Paris",
                country: "Australia",
              },
            },
            {
              id: 11,
              name: "Employee 2-1-11",
              age: 49,
              role: "Analyst",
              projects: [
                {
                  id: "P-2-1-11-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 233765,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-1-11-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 168710,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-1-11-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 117005,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: ["Certified Kubernetes Administrator"],
              address: {
                city: "Berlin",
                country: "Japan",
              },
            },
            {
              id: 12,
              name: "Employee 2-1-12",
              age: 25,
              role: "Engineer",
              projects: [
                {
                  id: "P-2-1-12-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 103281,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-1-12-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 140796,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-1-12-3",
                  name: "Project 3",
                  status: "In Progress",
                  budget: 107129,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: [
                "Certified Kubernetes Administrator",
                "PMP",
                "AWS Certified Developer",
              ],
              address: {
                city: "Sydney",
                country: "Japan",
              },
            },
            {
              id: 13,
              name: "Employee 2-1-13",
              age: 30,
              role: "Analyst",
              projects: [
                {
                  id: "P-2-1-13-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 103462,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-1-13-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 208878,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-1-13-3",
                  name: "Project 3",
                  status: "In Progress",
                  budget: 297058,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-3-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-1-13-4",
                  name: "Project 4",
                  status: "Completed",
                  budget: 164607,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: ["PMP"],
              address: {
                city: "Tokyo",
                country: "Australia",
              },
            },
            {
              id: 14,
              name: "Employee 2-1-14",
              age: 28,
              role: "Analyst",
              projects: [
                {
                  id: "P-2-1-14-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 104090,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: ["Google Analytics Certified", "PMP"],
              address: {
                city: "Paris",
                country: "Japan",
              },
            },
            {
              id: 15,
              name: "Employee 2-1-15",
              age: 40,
              role: "Manager",
              projects: [
                {
                  id: "P-2-1-15-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 256440,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-1-15-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 282558,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "Google Analytics Certified",
                "Certified Kubernetes Administrator",
              ],
              address: {
                city: "Berlin",
                country: "Australia",
              },
            },
          ],
        },
        {
          departmentName: "Engineering",
          employees: [
            {
              id: 1,
              name: "Employee 2-2-1",
              age: 28,
              role: "Manager",
              projects: [
                {
                  id: "P-2-2-1-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 236137,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-2-1-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 203842,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-2-1-3",
                  name: "Project 3",
                  status: "On Hold",
                  budget: 105822,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-3-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "Google Analytics Certified",
                "Salesforce Certified",
              ],
              address: {
                city: "San Francisco",
                country: "USA",
              },
            },
            {
              id: 2,
              name: "Employee 2-2-2",
              age: 26,
              role: "Analyst",
              projects: [
                {
                  id: "P-2-2-2-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 181114,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-2-2-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 296579,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-2-2-3",
                  name: "Project 3",
                  status: "In Progress",
                  budget: 107826,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-2-2-4",
                  name: "Project 4",
                  status: "In Progress",
                  budget: 204086,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-4-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: ["Salesforce Certified"],
              address: {
                city: "Tokyo",
                country: "Japan",
              },
            },
            {
              id: 3,
              name: "Employee 2-2-3",
              age: 48,
              role: "Manager",
              projects: [
                {
                  id: "P-2-2-3-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 162239,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: ["Certified Kubernetes Administrator"],
              address: {
                city: "New York",
                country: "USA",
              },
            },
            {
              id: 4,
              name: "Employee 2-2-4",
              age: 30,
              role: "Specialist",
              projects: [
                {
                  id: "P-2-2-4-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 170126,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "Certified Kubernetes Administrator",
                "Google Analytics Certified",
              ],
              address: {
                city: "Toronto",
                country: "Canada",
              },
            },
            {
              id: 5,
              name: "Employee 2-2-5",
              age: 45,
              role: "Specialist",
              projects: [
                {
                  id: "P-2-2-5-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 221060,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "PMP",
                "Certified Kubernetes Administrator",
                "Google Analytics Certified",
              ],
              address: {
                city: "New York",
                country: "USA",
              },
            },
            {
              id: 6,
              name: "Employee 2-2-6",
              age: 37,
              role: "Manager",
              projects: [
                {
                  id: "P-2-2-6-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 143017,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-2-6-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 202037,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "Google Analytics Certified",
                "AWS Certified Developer",
              ],
              address: {
                city: "Seattle",
                country: "France",
              },
            },
            {
              id: 7,
              name: "Employee 2-2-7",
              age: 37,
              role: "Specialist",
              projects: [
                {
                  id: "P-2-2-7-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 206638,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-2-7-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 120744,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-2-7-3",
                  name: "Project 3",
                  status: "On Hold",
                  budget: 118618,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-2-7-4",
                  name: "Project 4",
                  status: "In Progress",
                  budget: 204528,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: ["Certified Kubernetes Administrator"],
              address: {
                city: "New York",
                country: "Japan",
              },
            },
            {
              id: 8,
              name: "Employee 2-2-8",
              age: 29,
              role: "Engineer",
              projects: [
                {
                  id: "P-2-2-8-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 284232,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-2-8-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 299418,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: ["AWS Certified Developer"],
              address: {
                city: "Paris",
                country: "Germany",
              },
            },
            {
              id: 9,
              name: "Employee 2-2-9",
              age: 25,
              role: "Analyst",
              projects: [
                {
                  id: "P-2-2-9-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 181075,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-2-9-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 140802,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-2-9-3",
                  name: "Project 3",
                  status: "On Hold",
                  budget: 150335,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-2-9-4",
                  name: "Project 4",
                  status: "On Hold",
                  budget: 238450,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "Certified Kubernetes Administrator",
                "AWS Certified Developer",
              ],
              address: {
                city: "Sydney",
                country: "Germany",
              },
            },
            {
              id: 10,
              name: "Employee 2-2-10",
              age: 26,
              role: "Analyst",
              projects: [
                {
                  id: "P-2-2-10-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 213441,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-2-10-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 194856,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: ["Salesforce Certified"],
              address: {
                city: "San Francisco",
                country: "Canada",
              },
            },
            {
              id: 11,
              name: "Employee 2-2-11",
              age: 46,
              role: "Engineer",
              projects: [
                {
                  id: "P-2-2-11-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 130197,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-2-11-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 119139,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: [
                "Salesforce Certified",
                "Certified Kubernetes Administrator",
              ],
              address: {
                city: "New York",
                country: "Japan",
              },
            },
            {
              id: 12,
              name: "Employee 2-2-12",
              age: 31,
              role: "Engineer",
              projects: [
                {
                  id: "P-2-2-12-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 230770,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-2-12-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 240051,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-2-12-3",
                  name: "Project 3",
                  status: "On Hold",
                  budget: 257419,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: ["PMP"],
              address: {
                city: "Seattle",
                country: "USA",
              },
            },
            {
              id: 13,
              name: "Employee 2-2-13",
              age: 38,
              role: "Manager",
              projects: [
                {
                  id: "P-2-2-13-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 148866,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-2-13-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 241813,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-2-13-3",
                  name: "Project 3",
                  status: "In Progress",
                  budget: 263337,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: ["AWS Certified Developer"],
              address: {
                city: "San Francisco",
                country: "Germany",
              },
            },
          ],
        },
        {
          departmentName: "Operations",
          employees: [
            {
              id: 1,
              name: "Employee 2-3-1",
              age: 48,
              role: "Engineer",
              projects: [
                {
                  id: "P-2-3-1-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 258415,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-1-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 225902,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-1-3",
                  name: "Project 3",
                  status: "In Progress",
                  budget: 183559,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-3-1-4",
                  name: "Project 4",
                  status: "Completed",
                  budget: 203085,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: ["PMP"],
              address: {
                city: "Toronto",
                country: "Japan",
              },
            },
            {
              id: 2,
              name: "Employee 2-3-2",
              age: 28,
              role: "Analyst",
              projects: [
                {
                  id: "P-2-3-2-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 183285,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-3-2-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 229445,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-2-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 121397,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-3-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: [
                "Google Analytics Certified",
                "Certified Kubernetes Administrator",
                "PMP",
              ],
              address: {
                city: "San Francisco",
                country: "Germany",
              },
            },
            {
              id: 3,
              name: "Employee 2-3-3",
              age: 44,
              role: "Engineer",
              projects: [
                {
                  id: "P-2-3-3-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 124654,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: ["PMP", "AWS Certified Developer"],
              address: {
                city: "Sydney",
                country: "USA",
              },
            },
            {
              id: 4,
              name: "Employee 2-3-4",
              age: 26,
              role: "Specialist",
              projects: [
                {
                  id: "P-2-3-4-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 274146,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-4-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 253557,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "Google Analytics Certified",
                "AWS Certified Developer",
              ],
              address: {
                city: "New York",
                country: "USA",
              },
            },
            {
              id: 5,
              name: "Employee 2-3-5",
              age: 30,
              role: "Engineer",
              projects: [
                {
                  id: "P-2-3-5-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 276084,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-5-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 261590,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-3-5-3",
                  name: "Project 3",
                  status: "On Hold",
                  budget: 287465,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-5-4",
                  name: "Project 4",
                  status: "On Hold",
                  budget: 132004,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: [
                "Salesforce Certified",
                "Certified Kubernetes Administrator",
              ],
              address: {
                city: "Seattle",
                country: "Germany",
              },
            },
            {
              id: 6,
              name: "Employee 2-3-6",
              age: 41,
              role: "Engineer",
              projects: [
                {
                  id: "P-2-3-6-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 142416,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-6-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 253463,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-3-6-3",
                  name: "Project 3",
                  status: "On Hold",
                  budget: 130653,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-3-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: [
                "PMP",
                "Salesforce Certified",
                "Google Analytics Certified",
              ],
              address: {
                city: "Tokyo",
                country: "USA",
              },
            },
            {
              id: 7,
              name: "Employee 2-3-7",
              age: 25,
              role: "Engineer",
              projects: [
                {
                  id: "P-2-3-7-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 226125,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-7-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 280859,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-7-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 191605,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: [
                "PMP",
                "Google Analytics Certified",
                "Salesforce Certified",
              ],
              address: {
                city: "Sydney",
                country: "Canada",
              },
            },
            {
              id: 8,
              name: "Employee 2-3-8",
              age: 32,
              role: "Specialist",
              projects: [
                {
                  id: "P-2-3-8-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 228627,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-3-8-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 144911,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-3-8-3",
                  name: "Project 3",
                  status: "On Hold",
                  budget: 107770,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-3-8-4",
                  name: "Project 4",
                  status: "Completed",
                  budget: 276294,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: [
                "Certified Kubernetes Administrator",
                "PMP",
                "AWS Certified Developer",
              ],
              address: {
                city: "New York",
                country: "Germany",
              },
            },
            {
              id: 9,
              name: "Employee 2-3-9",
              age: 35,
              role: "Analyst",
              projects: [
                {
                  id: "P-2-3-9-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 153032,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-3-9-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 239090,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-9-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 280143,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-3-9-4",
                  name: "Project 4",
                  status: "Completed",
                  budget: 172992,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-4-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: [
                "Google Analytics Certified",
                "Certified Kubernetes Administrator",
              ],
              address: {
                city: "Paris",
                country: "Canada",
              },
            },
            {
              id: 10,
              name: "Employee 2-3-10",
              age: 41,
              role: "Specialist",
              projects: [
                {
                  id: "P-2-3-10-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 259390,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-10-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 166249,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-10-3",
                  name: "Project 3",
                  status: "In Progress",
                  budget: 190148,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-10-4",
                  name: "Project 4",
                  status: "In Progress",
                  budget: 292593,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-4-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: ["PMP"],
              address: {
                city: "Tokyo",
                country: "Germany",
              },
            },
            {
              id: 11,
              name: "Employee 2-3-11",
              age: 30,
              role: "Engineer",
              projects: [
                {
                  id: "P-2-3-11-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 283009,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "Salesforce Certified",
                "PMP",
                "Google Analytics Certified",
              ],
              address: {
                city: "San Francisco",
                country: "Australia",
              },
            },
            {
              id: 12,
              name: "Employee 2-3-12",
              age: 35,
              role: "Analyst",
              projects: [
                {
                  id: "P-2-3-12-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 181397,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-3-12-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 125282,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: [
                "Certified Kubernetes Administrator",
                "Salesforce Certified",
              ],
              address: {
                city: "Berlin",
                country: "Canada",
              },
            },
            {
              id: 13,
              name: "Employee 2-3-13",
              age: 47,
              role: "Engineer",
              projects: [
                {
                  id: "P-2-3-13-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 230786,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-3-13-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 118055,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-13-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 215140,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-3-13-4",
                  name: "Project 4",
                  status: "In Progress",
                  budget: 217421,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-4-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: [
                "Certified Kubernetes Administrator",
                "Salesforce Certified",
                "AWS Certified Developer",
              ],
              address: {
                city: "Tokyo",
                country: "Australia",
              },
            },
            {
              id: 14,
              name: "Employee 2-3-14",
              age: 47,
              role: "Manager",
              projects: [
                {
                  id: "P-2-3-14-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 132807,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-3-14-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 251503,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-14-3",
                  name: "Project 3",
                  status: "In Progress",
                  budget: 259781,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-3-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-2-3-14-4",
                  name: "Project 4",
                  status: "Completed",
                  budget: 238705,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-4-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: [
                "Google Analytics Certified",
                "PMP",
                "AWS Certified Developer",
              ],
              address: {
                city: "San Francisco",
                country: "Germany",
              },
            },
            {
              id: 15,
              name: "Employee 2-3-15",
              age: 40,
              role: "Analyst",
              projects: [
                {
                  id: "P-2-3-15-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 177805,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-15-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 211166,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-15-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 241405,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: ["PMP"],
              address: {
                city: "Berlin",
                country: "Australia",
              },
            },
            {
              id: 16,
              name: "Employee 2-3-16",
              age: 28,
              role: "Engineer",
              projects: [
                {
                  id: "P-2-3-16-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 268329,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-16-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 102575,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-16-3",
                  name: "Project 3",
                  status: "In Progress",
                  budget: 119977,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-3-16-4",
                  name: "Project 4",
                  status: "Completed",
                  budget: 261540,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: [
                "AWS Certified Developer",
                "PMP",
                "Salesforce Certified",
              ],
              address: {
                city: "Seattle",
                country: "Canada",
              },
            },
            {
              id: 17,
              name: "Employee 2-3-17",
              age: 33,
              role: "Analyst",
              projects: [
                {
                  id: "P-2-3-17-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 205034,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-3-17-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 147634,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-3-17-3",
                  name: "Project 3",
                  status: "On Hold",
                  budget: 264564,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-3-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-3-17-4",
                  name: "Project 4",
                  status: "On Hold",
                  budget: 283848,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: ["Salesforce Certified", "PMP"],
              address: {
                city: "Seattle",
                country: "France",
              },
            },
            {
              id: 18,
              name: "Employee 2-3-18",
              age: 25,
              role: "Specialist",
              projects: [
                {
                  id: "P-2-3-18-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 194004,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-3-18-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 140219,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-18-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 295133,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-2-3-18-4",
                  name: "Project 4",
                  status: "Completed",
                  budget: 159649,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: [
                "Google Analytics Certified",
                "Certified Kubernetes Administrator",
                "PMP",
              ],
              address: {
                city: "Toronto",
                country: "France",
              },
            },
            {
              id: 19,
              name: "Employee 2-3-19",
              age: 30,
              role: "Specialist",
              projects: [
                {
                  id: "P-2-3-19-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 186726,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-2-3-19-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 226056,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: ["PMP", "Certified Kubernetes Administrator"],
              address: {
                city: "Toronto",
                country: "Japan",
              },
            },
          ],
        },
      ],
    },
    {
      divisionName: "Division 3",
      departments: [
        {
          departmentName: "HR",
          employees: [
            {
              id: 1,
              name: "Employee 3-1-1",
              age: 27,
              role: "Manager",
              projects: [
                {
                  id: "P-3-1-1-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 237765,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-3-1-1-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 158264,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-3-1-1-3",
                  name: "Project 3",
                  status: "In Progress",
                  budget: 216357,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-3-1-1-4",
                  name: "Project 4",
                  status: "On Hold",
                  budget: 101471,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-4-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: [
                "AWS Certified Developer",
                "Salesforce Certified",
                "PMP",
              ],
              address: {
                city: "Tokyo",
                country: "Germany",
              },
            },
            {
              id: 2,
              name: "Employee 3-1-2",
              age: 34,
              role: "Manager",
              projects: [
                {
                  id: "P-3-1-2-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 244982,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: ["Certified Kubernetes Administrator"],
              address: {
                city: "Berlin",
                country: "Canada",
              },
            },
            {
              id: 3,
              name: "Employee 3-1-3",
              age: 44,
              role: "Specialist",
              projects: [
                {
                  id: "P-3-1-3-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 284730,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-3-1-3-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 181740,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-3-1-3-3",
                  name: "Project 3",
                  status: "In Progress",
                  budget: 143928,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-3-1-3-4",
                  name: "Project 4",
                  status: "In Progress",
                  budget: 192037,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: [
                "Salesforce Certified",
                "AWS Certified Developer",
              ],
              address: {
                city: "New York",
                country: "Germany",
              },
            },
            {
              id: 4,
              name: "Employee 3-1-4",
              age: 29,
              role: "Analyst",
              projects: [
                {
                  id: "P-3-1-4-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 107761,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-3-1-4-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 249211,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-3-1-4-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 144131,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "AWS Certified Developer",
                "Google Analytics Certified",
              ],
              address: {
                city: "New York",
                country: "Canada",
              },
            },
            {
              id: 5,
              name: "Employee 3-1-5",
              age: 44,
              role: "Specialist",
              projects: [
                {
                  id: "P-3-1-5-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 109573,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-3-1-5-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 195699,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: ["PMP", "Salesforce Certified"],
              address: {
                city: "Toronto",
                country: "USA",
              },
            },
            {
              id: 6,
              name: "Employee 3-1-6",
              age: 39,
              role: "Manager",
              projects: [
                {
                  id: "P-3-1-6-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 189778,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-3-1-6-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 137175,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: [
                "AWS Certified Developer",
                "PMP",
                "Google Analytics Certified",
              ],
              address: {
                city: "Tokyo",
                country: "Germany",
              },
            },
            {
              id: 7,
              name: "Employee 3-1-7",
              age: 50,
              role: "Analyst",
              projects: [
                {
                  id: "P-3-1-7-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 268138,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-3-1-7-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 297218,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: ["Google Analytics Certified"],
              address: {
                city: "Seattle",
                country: "Japan",
              },
            },
            {
              id: 8,
              name: "Employee 3-1-8",
              age: 39,
              role: "Manager",
              projects: [
                {
                  id: "P-3-1-8-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 217454,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: ["PMP"],
              address: {
                city: "Paris",
                country: "Australia",
              },
            },
            {
              id: 9,
              name: "Employee 3-1-9",
              age: 37,
              role: "Engineer",
              projects: [
                {
                  id: "P-3-1-9-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 270266,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: [
                "Certified Kubernetes Administrator",
                "Google Analytics Certified",
              ],
              address: {
                city: "Berlin",
                country: "Japan",
              },
            },
            {
              id: 10,
              name: "Employee 3-1-10",
              age: 44,
              role: "Specialist",
              projects: [
                {
                  id: "P-3-1-10-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 268671,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "Certified Kubernetes Administrator",
                "Google Analytics Certified",
                "PMP",
              ],
              address: {
                city: "New York",
                country: "France",
              },
            },
            {
              id: 11,
              name: "Employee 3-1-11",
              age: 26,
              role: "Manager",
              projects: [
                {
                  id: "P-3-1-11-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 155741,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-3-1-11-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 288533,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-3-1-11-3",
                  name: "Project 3",
                  status: "In Progress",
                  budget: 201333,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-3-1-11-4",
                  name: "Project 4",
                  status: "On Hold",
                  budget: 208205,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "Certified Kubernetes Administrator",
                "Google Analytics Certified",
                "PMP",
              ],
              address: {
                city: "New York",
                country: "Japan",
              },
            },
            {
              id: 12,
              name: "Employee 3-1-12",
              age: 31,
              role: "Specialist",
              projects: [
                {
                  id: "P-3-1-12-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 270007,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-3-1-12-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 251759,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: ["Google Analytics Certified"],
              address: {
                city: "Toronto",
                country: "Australia",
              },
            },
            {
              id: 13,
              name: "Employee 3-1-13",
              age: 49,
              role: "Engineer",
              projects: [
                {
                  id: "P-3-1-13-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 125858,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-3-1-13-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 285675,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-3-1-13-3",
                  name: "Project 3",
                  status: "In Progress",
                  budget: 105752,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: [
                "Certified Kubernetes Administrator",
                "Salesforce Certified",
                "Google Analytics Certified",
              ],
              address: {
                city: "Paris",
                country: "Germany",
              },
            },
            {
              id: 14,
              name: "Employee 3-1-14",
              age: 45,
              role: "Analyst",
              projects: [
                {
                  id: "P-3-1-14-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 240306,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-3-1-14-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 182354,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: ["PMP", "AWS Certified Developer"],
              address: {
                city: "Tokyo",
                country: "Japan",
              },
            },
            {
              id: 15,
              name: "Employee 3-1-15",
              age: 28,
              role: "Analyst",
              projects: [
                {
                  id: "P-3-1-15-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 116175,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-3-1-15-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 267501,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-3-1-15-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 280132,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-3-1-15-4",
                  name: "Project 4",
                  status: "In Progress",
                  budget: 284262,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: [
                "AWS Certified Developer",
                "Certified Kubernetes Administrator",
                "Salesforce Certified",
              ],
              address: {
                city: "Berlin",
                country: "Australia",
              },
            },
            {
              id: 16,
              name: "Employee 3-1-16",
              age: 43,
              role: "Engineer",
              projects: [
                {
                  id: "P-3-1-16-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 108974,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-3-1-16-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 236403,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "Google Analytics Certified",
                "Certified Kubernetes Administrator",
              ],
              address: {
                city: "Berlin",
                country: "Australia",
              },
            },
            {
              id: 17,
              name: "Employee 3-1-17",
              age: 36,
              role: "Engineer",
              projects: [
                {
                  id: "P-3-1-17-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 198917,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-3-1-17-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 277162,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-3-1-17-3",
                  name: "Project 3",
                  status: "On Hold",
                  budget: 105277,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-3-1-17-4",
                  name: "Project 4",
                  status: "Completed",
                  budget: 299886,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-4-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: [
                "PMP",
                "Google Analytics Certified",
                "Certified Kubernetes Administrator",
              ],
              address: {
                city: "Berlin",
                country: "USA",
              },
            },
            {
              id: 18,
              name: "Employee 3-1-18",
              age: 25,
              role: "Manager",
              projects: [
                {
                  id: "P-3-1-18-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 125861,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "PMP",
                "AWS Certified Developer",
                "Google Analytics Certified",
              ],
              address: {
                city: "Paris",
                country: "USA",
              },
            },
          ],
        },
        {
          departmentName: "Finance",
          employees: [
            {
              id: 1,
              name: "Employee 3-2-1",
              age: 27,
              role: "Specialist",
              projects: [
                {
                  id: "P-3-2-1-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 135753,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-3-2-1-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 238959,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-3-2-1-3",
                  name: "Project 3",
                  status: "In Progress",
                  budget: 261699,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-3-2-1-4",
                  name: "Project 4",
                  status: "Completed",
                  budget: 126618,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: ["Certified Kubernetes Administrator"],
              address: {
                city: "Berlin",
                country: "Canada",
              },
            },
            {
              id: 2,
              name: "Employee 3-2-2",
              age: 44,
              role: "Specialist",
              projects: [
                {
                  id: "P-3-2-2-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 254533,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-3-2-2-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 194252,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-3-2-2-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 206342,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-3-2-2-4",
                  name: "Project 4",
                  status: "Completed",
                  budget: 169615,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-4-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "PMP",
                "Google Analytics Certified",
                "AWS Certified Developer",
              ],
              address: {
                city: "Sydney",
                country: "Australia",
              },
            },
            {
              id: 3,
              name: "Employee 3-2-3",
              age: 36,
              role: "Engineer",
              projects: [
                {
                  id: "P-3-2-3-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 191845,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: ["Certified Kubernetes Administrator", "PMP"],
              address: {
                city: "New York",
                country: "France",
              },
            },
            {
              id: 4,
              name: "Employee 3-2-4",
              age: 47,
              role: "Analyst",
              projects: [
                {
                  id: "P-3-2-4-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 243603,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-3-2-4-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 228240,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: ["AWS Certified Developer"],
              address: {
                city: "San Francisco",
                country: "Germany",
              },
            },
            {
              id: 5,
              name: "Employee 3-2-5",
              age: 50,
              role: "Engineer",
              projects: [
                {
                  id: "P-3-2-5-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 162349,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-3-2-5-2",
                  name: "Project 2",
                  status: "In Progress",
                  budget: 242157,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: [
                "Google Analytics Certified",
                "Salesforce Certified",
                "AWS Certified Developer",
              ],
              address: {
                city: "Paris",
                country: "Japan",
              },
            },
            {
              id: 6,
              name: "Employee 3-2-6",
              age: 34,
              role: "Analyst",
              projects: [
                {
                  id: "P-3-2-6-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 274878,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-3-2-6-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 170544,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-2-3",
                      name: "Milestone 3",
                      status: "In Progress",
                    },
                  ],
                },
              ],
              certifications: [
                "Certified Kubernetes Administrator",
                "PMP",
                "Google Analytics Certified",
              ],
              address: {
                city: "Tokyo",
                country: "Japan",
              },
            },
            {
              id: 7,
              name: "Employee 3-2-7",
              age: 39,
              role: "Manager",
              projects: [
                {
                  id: "P-3-2-7-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 102324,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: ["Certified Kubernetes Administrator"],
              address: {
                city: "Seattle",
                country: "Canada",
              },
            },
            {
              id: 8,
              name: "Employee 3-2-8",
              age: 42,
              role: "Analyst",
              projects: [
                {
                  id: "P-3-2-8-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 259721,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-3",
                      name: "Milestone 3",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-3-2-8-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 202679,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: ["Certified Kubernetes Administrator", "PMP"],
              address: {
                city: "New York",
                country: "Australia",
              },
            },
            {
              id: 9,
              name: "Employee 3-2-9",
              age: 35,
              role: "Engineer",
              projects: [
                {
                  id: "P-3-2-9-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 282162,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-3-2-9-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 125900,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-2-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-3-2-9-3",
                  name: "Project 3",
                  status: "On Hold",
                  budget: 279242,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-3-2-9-4",
                  name: "Project 4",
                  status: "In Progress",
                  budget: 126038,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "Certified Kubernetes Administrator",
                "Google Analytics Certified",
                "PMP",
              ],
              address: {
                city: "Tokyo",
                country: "USA",
              },
            },
            {
              id: 10,
              name: "Employee 3-2-10",
              age: 30,
              role: "Manager",
              projects: [
                {
                  id: "P-3-2-10-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 218031,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-3-2-10-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 202745,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-3-2-10-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 132914,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-3-3",
                      name: "Milestone 3",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-3-2-10-4",
                  name: "Project 4",
                  status: "On Hold",
                  budget: 257890,
                  milestones: [
                    {
                      milestoneId: "M-4-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-4-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: ["Salesforce Certified"],
              address: {
                city: "Tokyo",
                country: "France",
              },
            },
            {
              id: 11,
              name: "Employee 3-2-11",
              age: 32,
              role: "Analyst",
              projects: [
                {
                  id: "P-3-2-11-1",
                  name: "Project 1",
                  status: "On Hold",
                  budget: 249476,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-3-2-11-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 151887,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
              ],
              certifications: [
                "AWS Certified Developer",
                "Certified Kubernetes Administrator",
              ],
              address: {
                city: "San Francisco",
                country: "France",
              },
            },
            {
              id: 12,
              name: "Employee 3-2-12",
              age: 48,
              role: "Engineer",
              projects: [
                {
                  id: "P-3-2-12-1",
                  name: "Project 1",
                  status: "Completed",
                  budget: 160559,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                  ],
                },
                {
                  id: "P-3-2-12-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 200807,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-3-2-12-3",
                  name: "Project 3",
                  status: "Completed",
                  budget: 106484,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: ["Certified Kubernetes Administrator"],
              address: {
                city: "New York",
                country: "USA",
              },
            },
            {
              id: 13,
              name: "Employee 3-2-13",
              age: 25,
              role: "Specialist",
              projects: [
                {
                  id: "P-3-2-13-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 135672,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
                {
                  id: "P-3-2-13-2",
                  name: "Project 2",
                  status: "On Hold",
                  budget: 270465,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-3-2-13-3",
                  name: "Project 3",
                  status: "In Progress",
                  budget: 266890,
                  milestones: [
                    {
                      milestoneId: "M-3-1",
                      name: "Milestone 1",
                      status: "In Progress",
                    },
                    {
                      milestoneId: "M-3-2",
                      name: "Milestone 2",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "AWS Certified Developer",
                "Salesforce Certified",
              ],
              address: {
                city: "New York",
                country: "Australia",
              },
            },
            {
              id: 14,
              name: "Employee 3-2-14",
              age: 47,
              role: "Specialist",
              projects: [
                {
                  id: "P-3-2-14-1",
                  name: "Project 1",
                  status: "In Progress",
                  budget: 187982,
                  milestones: [
                    {
                      milestoneId: "M-1-1",
                      name: "Milestone 1",
                      status: "Completed",
                    },
                    {
                      milestoneId: "M-1-2",
                      name: "Milestone 2",
                      status: "Completed",
                    },
                  ],
                },
                {
                  id: "P-3-2-14-2",
                  name: "Project 2",
                  status: "Completed",
                  budget: 191390,
                  milestones: [
                    {
                      milestoneId: "M-2-1",
                      name: "Milestone 1",
                      status: "On Hold",
                    },
                  ],
                },
              ],
              certifications: [
                "PMP",
                "Certified Kubernetes Administrator",
                "AWS Certified Developer",
              ],
              address: {
                city: "San Francisco",
                country: "Japan",
              },
            },
          ],
        },
      ],
    },
  ],
  revenue: {
    2021: 9081205,
    2022: 8284379,
    2023: 9489588,
  },
  resources: {
    infrastructure: ["AWS", "Azure", "Google Cloud"],
    software: ["Jira", "Confluence", "Slack", "Asana", "Zoom"],
  },
};

module.exports = organisation;
