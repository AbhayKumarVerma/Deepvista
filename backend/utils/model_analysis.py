from pycaret import classification, regression
import pandas as pd

def perform_model_analysis(data, target_column, problem_type, numeric_columns, categorical_columns):

    data = pd.DataFrame(data)
    data.columns = data.iloc[0]
    
    return (best_model, results_df)