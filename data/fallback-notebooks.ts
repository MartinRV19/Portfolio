export const taskManagementNotebook = {
  cells: [
    {
      cell_type: "markdown",
      metadata: {},
      source: [
        "# Task Management Analytics\n",
        "\n",
        "This notebook analyzes user engagement data from our task management application.",
      ],
    },
    {
      cell_type: "code",
      execution_count: 1,
      metadata: {},
      outputs: [],
      source: [
        "import pandas as pd\n",
        "import numpy as np\n",
        "import matplotlib.pyplot as plt\n",
        "import seaborn as sns\n",
        "\n",
        "# Set the style for our plots\n",
        'sns.set(style="whitegrid")',
      ],
    },
    {
      cell_type: "markdown",
      metadata: {},
      source: ["## Loading the Dataset\n", "\n", "First, we'll load our user engagement data."],
    },
    {
      cell_type: "code",
      execution_count: 2,
      metadata: {},
      outputs: [
        {
          data: {
            "text/html": [
              "<div>\n",
              "<style scoped>\n",
              "    .dataframe tbody tr th:only-of-type {\n",
              "        vertical-align: middle;\n",
              "    }\n",
              "\n",
              "    .dataframe tbody tr th {\n",
              "        vertical-align: top;\n",
              "    }\n",
              "\n",
              "    .dataframe thead th {\n",
              "        text-align: right;\n",
              "    }\n",
              "</style>\n",
              '<table border="1" class="dataframe">\n',
              "  <thead>\n",
              '    <tr style="text-align: right;">\n',
              "      <th></th>\n",
              "      <th>Date</th>\n",
              "      <th>User ID</th>\n",
              "      <th>Tasks Created</th>\n",
              "      <th>Tasks Completed</th>\n",
              "      <th>Active Minutes</th>\n",
              "    </tr>\n",
              "  </thead>\n",
              "  <tbody>\n",
              "    <tr>\n",
              "      <th>0</th>\n",
              "      <td>2023-01-01</td>\n",
              "      <td>1001</td>\n",
              "      <td>5</td>\n",
              "      <td>3</td>\n",
              "      <td>45</td>\n",
              "    </tr>\n",
              "    <tr>\n",
              "      <th>1</th>\n",
              "      <td>2023-01-02</td>\n",
              "      <td>1002</td>\n",
              "      <td>8</td>\n",
              "      <td>6</td>\n",
              "      <td>60</td>\n",
              "    </tr>\n",
              "    <tr>\n",
              "      <th>2</th>\n",
              "      <td>2023-01-03</td>\n",
              "      <td>1003</td>\n",
              "      <td>3</td>\n",
              "      <td>2</td>\n",
              "      <td>30</td>\n",
              "    </tr>\n",
              "  </tbody>\n",
              "</table>\n",
              "</div>",
            ],
            "text/plain": [
              "         Date  User ID  Tasks Created  Tasks Completed  Active Minutes\n",
              "0  2023-01-01     1001              5                3              45\n",
              "1  2023-01-02     1002              8                6              60\n",
              "2  2023-01-03     1003              3                2              30",
            ],
          },
          execution_count: 2,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: [
        "# Sample data (in a real notebook, we would load from a file)\n",
        "data = {\n",
        "    'Date': ['2023-01-01', '2023-01-02', '2023-01-03'],\n",
        "    'User ID': [1001, 1002, 1003],\n",
        "    'Tasks Created': [5, 8, 3],\n",
        "    'Tasks Completed': [3, 6, 2],\n",
        "    'Active Minutes': [45, 60, 30]\n",
        "}\n",
        "\n",
        "df = pd.DataFrame(data)\n",
        "df",
      ],
    },
    {
      cell_type: "markdown",
      metadata: {},
      source: ["## Task Completion Rate Analysis\n", "\n", "Let's calculate the task completion rate for each user."],
    },
    {
      cell_type: "code",
      execution_count: 3,
      metadata: {},
      outputs: [
        {
          data: {
            "text/html": [
              "<div>\n",
              "<style scoped>\n",
              "    .dataframe tbody tr th:only-of-type {\n",
              "        vertical-align: middle;\n",
              "    }\n",
              "\n",
              "    .dataframe tbody tr th {\n",
              "        vertical-align: top;\n",
              "    }\n",
              "\n",
              "    .dataframe thead th {\n",
              "        text-align: right;\n",
              "    }\n",
              "</style>\n",
              '<table border="1" class="dataframe">\n',
              "  <thead>\n",
              '    <tr style="text-align: right;">\n',
              "      <th></th>\n",
              "      <th>Date</th>\n",
              "      <th>User ID</th>\n",
              "      <th>Tasks Created</th>\n",
              "      <th>Tasks Completed</th>\n",
              "      <th>Active Minutes</th>\n",
              "      <th>Completion Rate</th>\n",
              "    </tr>\n",
              "  </thead>\n",
              "  <tbody>\n",
              "    <tr>\n",
              "      <th>0</th>\n",
              "      <td>2023-01-01</td>\n",
              "      <td>1001</td>\n",
              "      <td>5</td>\n",
              "      <td>3</td>\n",
              "      <td>45</td>\n",
              "      <td>0.60</td>\n",
              "    </tr>\n",
              "    <tr>\n",
              "      <th>1</th>\n",
              "      <td>2023-01-02</td>\n",
              "      <td>1002</td>\n",
              "      <td>8</td>\n",
              "      <td>6</td>\n",
              "      <td>60</td>\n",
              "      <td>0.75</td>\n",
              "    </tr>\n",
              "    <tr>\n",
              "      <th>2</th>\n",
              "      <td>2023-01-03</td>\n",
              "      <td>1003</td>\n",
              "      <td>3</td>\n",
              "      <td>2</td>\n",
              "      <td>30</td>\n",
              "      <td>0.67</td>\n",
              "    </tr>\n",
              "  </tbody>\n",
              "</table>\n",
              "</div>",
            ],
            "text/plain": [
              "         Date  User ID  Tasks Created  Tasks Completed  Active Minutes  Completion Rate\n",
              "0  2023-01-01     1001              5                3              45             0.60\n",
              "1  2023-01-02     1002              8                6              60             0.75\n",
              "2  2023-01-03     1003              3                2              30             0.67",
            ],
          },
          execution_count: 3,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: [
        "# Calculate completion rate\n",
        "df['Completion Rate'] = df['Tasks Completed'] / df['Tasks Created']\n",
        "df",
      ],
    },
    {
      cell_type: "markdown",
      metadata: {},
      source: [
        "## Conclusion\n",
        "\n",
        "Based on our analysis, we can see that User 1002 has the highest completion rate (75%). This suggests that they are the most efficient user in our sample dataset.",
      ],
    },
  ],
  metadata: {
    kernelspec: {
      display_name: "Python 3",
      language: "python",
      name: "python3",
    },
    language_info: {
      codemirror_mode: {
        name: "ipython",
        version: 3,
      },
      file_extension: ".py",
      mimetype: "text/x-python",
      name: "python",
      nbconvert_exporter: "python",
      pygments_lexer: "ipython3",
      version: "3.8.10",
    },
  },
  nbformat: 4,
  nbformat_minor: 4,
}

export const weatherNotebook = {
  cells: [
    {
      cell_type: "markdown",
      metadata: {},
      source: [
        "# Weather Data Analysis\n",
        "\n",
        "This notebook analyzes weather data from our weather dashboard application.",
      ],
    },
    {
      cell_type: "code",
      execution_count: 1,
      metadata: {},
      outputs: [],
      source: [
        "import pandas as pd\n",
        "import numpy as np\n",
        "import matplotlib.pyplot as plt\n",
        "import seaborn as sns\n",
        "\n",
        "# Set the style for our plots\n",
        'sns.set(style="whitegrid")',
      ],
    },
    {
      cell_type: "markdown",
      metadata: {},
      source: ["## Loading the Dataset\n", "\n", "First, we'll load our weather data."],
    },
    {
      cell_type: "code",
      execution_count: 2,
      metadata: {},
      outputs: [
        {
          data: {
            "text/html": [
              "<div>\n",
              "<style scoped>\n",
              "    .dataframe tbody tr th:only-of-type {\n",
              "        vertical-align: middle;\n",
              "    }\n",
              "\n",
              "    .dataframe tbody tr th {\n",
              "        vertical-align: top;\n",
              "    }\n",
              "\n",
              "    .dataframe thead th {\n",
              "        text-align: right;\n",
              "    }\n",
              "</style>\n",
              '<table border="1" class="dataframe">\n',
              "  <thead>\n",
              '    <tr style="text-align: right;">\n',
              "      <th></th>\n",
              "      <th>Date</th>\n",
              "      <th>City</th>\n",
              "      <th>Temperature</th>\n",
              "      <th>Humidity</th>\n",
              "      <th>Precipitation</th>\n",
              "    </tr>\n",
              "  </thead>\n",
              "  <tbody>\n",
              "    <tr>\n",
              "      <th>0</th>\n",
              "      <td>2023-01-01</td>\n",
              "      <td>New York</td>\n",
              "      <td>32</td>\n",
              "      <td>65</td>\n",
              "      <td>0.1</td>\n",
              "    </tr>\n",
              "    <tr>\n",
              "      <th>1</th>\n",
              "      <td>2023-01-02</td>\n",
              "      <td>Los Angeles</td>\n",
              "      <td>75</td>\n",
              "      <td>45</td>\n",
              "      <td>0.0</td>\n",
              "    </tr>\n",
              "    <tr>\n",
              "      <th>2</th>\n",
              "      <td>2023-01-03</td>\n",
              "      <td>Chicago</td>\n",
              "      <td>28</td>\n",
              "      <td>70</td>\n",
              "      <td>0.3</td>\n",
              "    </tr>\n",
              "  </tbody>\n",
              "</table>\n",
              "</div>",
            ],
            "text/plain": [
              "         Date         City  Temperature  Humidity  Precipitation\n",
              "0  2023-01-01     New York           32        65            0.1\n",
              "1  2023-01-02  Los Angeles           75        45            0.0\n",
              "2  2023-01-03      Chicago           28        70            0.3",
            ],
          },
          execution_count: 2,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: [
        "# Sample data (in a real notebook, we would load from a file)\n",
        "data = {\n",
        "    'Date': ['2023-01-01', '2023-01-02', '2023-01-03'],\n",
        "    'City': ['New York', 'Los Angeles', 'Chicago'],\n",
        "    'Temperature': [32, 75, 28],\n",
        "    'Humidity': [65, 45, 70],\n",
        "    'Precipitation': [0.1, 0.0, 0.3]\n",
        "}\n",
        "\n",
        "df = pd.DataFrame(data)\n",
        "df",
      ],
    },
    {
      cell_type: "markdown",
      metadata: {},
      source: ["## Temperature Analysis\n", "\n", "Let's analyze the temperature differences between cities."],
    },
    {
      cell_type: "code",
      execution_count: 3,
      metadata: {},
      outputs: [
        {
          data: {
            "text/plain": [
              "City\n",
              "Chicago         28.0\n",
              "Los Angeles     75.0\n",
              "New York        32.0\n",
              "Name: Temperature, dtype: float64",
            ],
          },
          execution_count: 3,
          metadata: {},
          output_type: "execute_result",
        },
      ],
      source: [
        "# Group by city and calculate average temperature\n",
        "city_temps = df.groupby('City')['Temperature'].mean()\n",
        "city_temps",
      ],
    },
    {
      cell_type: "markdown",
      metadata: {},
      source: [
        "## Conclusion\n",
        "\n",
        "Based on our analysis, Los Angeles has the highest temperature at 75°F, while Chicago has the lowest at 28°F. New York falls in between at 32°F.",
      ],
    },
  ],
  metadata: {
    kernelspec: {
      display_name: "Python 3",
      language: "python",
      name: "python3",
    },
    language_info: {
      codemirror_mode: {
        name: "ipython",
        version: 3,
      },
      file_extension: ".py",
      mimetype: "text/x-python",
      name: "python",
      nbconvert_exporter: "python",
      pygments_lexer: "ipython3",
      version: "3.8.10",
    },
  },
  nbformat: 4,
  nbformat_minor: 4,
}

// Add more fallback notebooks for other projects as needed
export const getFallbackNotebook = (slug: string) => {
  switch (slug) {
    case "task-management":
      return taskManagementNotebook
    case "weather-dashboard":
      return weatherNotebook
    default:
      return taskManagementNotebook // Default fallback
  }
}
